import {
    AngularNodeAppEngine,
    createNodeRequestHandler,
    isMainModule,
    writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import { User } from './classes/user';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(path.dirname(__filename), '../../../src');
const serverDistFolder = path.dirname(fileURLToPath(import.meta.url));
const browserDistFolder = path.resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();
const jsonParser = express.json();
const userTestDataSet = 'test-user-dataset.json';

const getData = (dataName: string) => {
    const rawData = fs.readFileSync(path.join(__dirname, dataName), 'utf8');
    return JSON.parse(rawData);
}

/**
 * Serve static files from /browser
 */
app.use(
    express.static(browserDistFolder, {
        maxAge: '1y',
        index: false,
        redirect: false,
    }),
);

// Data endpoint to check if the user exists
app.get('/user/exist', jsonParser, (req, res) => {
    const data: User[] = getData(userTestDataSet).userList;
    if (data.find(user => user.email === req.query['data']) || 
        data.find(user => user.login === req.query['data']) || 
        data.find(user => user.phone === req.query['data'])) {
        res.json({ exist: true });
    }
    else {
        res.json({ exist: false });
    }
});

// Data endpoint to add a new user, user already exists check
app.post('/user/get', jsonParser, (req, res) => {
    const data: User[] = getData(userTestDataSet).userList;
    const user = data.find(user => user.login === req.body.data && user.password === req.body.password) ?? 
                 data.find(user => user.email === req.body.data && user.password === req.body.password) ??
                 data.find(user => user.phone === req.body.data && user.password === req.body.password);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).send({ error: 'User not found' });
    }
});

// Data endpoint to add a new user
app.post('/user/create', jsonParser, (req, res) => {
    const data = getData(userTestDataSet);
    const userList: User[] = data.userList;

    if (userList.find(user => user.login == req.body.user.login)) {
        res.status(409).send({ error: 'User already exists' });
    }
    else {
        const newUser: User = {
            id: (userList.length + 1).toString(),
            login: req.body.user.login,
            name: req.body.user.name,
            email: req.body.user.email,
            phone: req.body.user.phone,
            password: req.body.user.password
        };
        userList.push(newUser);
        data.userList = userList;
        fs.writeFileSync(path.join(__dirname, userTestDataSet), JSON.stringify(data, null, 2));
        res.json(newUser);
    }
});

// Data endpoint to update user data
app.put('/user/update', jsonParser, (req, res) => {
    const data = getData(userTestDataSet);
    const userList: User[] = data.userList;

    const userIndex = userList.findIndex(user => user.id == req.body.user.id);
    if (userIndex !== -1) {
        userList[userIndex] = {
            ...userList[userIndex],
            ...req.body.user
        };
        fs.writeFileSync(path.join(__dirname, userTestDataSet), JSON.stringify({ userList }, null, 2));
        res.json({ status: true });
    }
    else {
        res.status(404).send({ error: 'User not found' });
    }
});

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
    angularApp
        .handle(req)
        .then((response) =>
        response ? writeResponseToNodeResponse(response, res) : next(),
        )
        .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
const port = process.env['PORT'] || 4000;
    app.listen(port, () => {
        console.log(`Node Express server listening on http://localhost:${port}`);
    });
}

/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createNodeRequestHandler(app);
