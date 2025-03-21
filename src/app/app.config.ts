import { provideRouter, Routes } from "@angular/router";
import { ApplicationConfig } from "@angular/core";
import { provideHttpClient, withFetch } from "@angular/common/http";

import { HomeComponent } from "./home.component";
import { RegistrationComponent } from "./registration.component";

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "r", component: RegistrationComponent}
];

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes),
        provideHttpClient(withFetch())
    ]
};