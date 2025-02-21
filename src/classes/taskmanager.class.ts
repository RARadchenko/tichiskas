import { TaskStatus } from '../enums/taskstatus.enum';
import { ITask } from '../interfaces/task.interface';
import { ITaskLoader } from '../interfaces/taskloader.interface';
import { ITaskManager } from '../interfaces/taskmanager.interface';

export class TaskManager extends ITaskManager<TaskManager> {
    constructor() {
        super();
    }

    AddTask(task: ITaskLoader): void {
        this._taskStack.push(task);
    }

    EditTask(taskID: number, status: TaskStatus): void {
        let taskIndex = this._taskStack.findIndex((t) => t.task.ID == taskID);
        if (taskIndex >= 0) {
            this._taskStack[taskIndex].task.status = status;
            return;
        }
        throw Error(`Index of task id${taskID} was not found.`);
    }
    
    DeleteTask(taskID: number): void {
        let taskIndex = this._taskStack.findIndex((t) => t.task.ID == taskID);
        if (taskIndex >= 0) {
            this._taskStack.splice(taskIndex, 1);
            return;
        }
        throw Error(`Index of task id${taskID} was not found.`);
    }
    
    FindTask(taskID: number): ITask;
    FindTask(taskTitle: string): ITask;

    FindTask(arg: number | string): ITask {
        if (typeof arg === "number") {
            let task = this._taskStack.find((t) => t.task.ID == arg);
            if (task) {
                return task.task;
            }
            throw Error(`Index of task id${arg} was not found.`);
        } else {
            let task = this._taskStack.find((t) => t.task.title == arg);
            if (task) {
                return task.task;
            }
            throw Error(`Task by title "${arg}" was not found.`);
        }
    }

    FindTaskByStatus(arg: TaskStatus): ITask {
        let task = this._taskStack.find((t) => t.task.status == arg);
        if (task) {
            return task.task;
        }
        throw Error(`Task by status "${arg}" was not found.`);
    }
}