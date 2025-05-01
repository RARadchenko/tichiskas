import { TaskStatus } from "../enums/taskstatus.enum";
import { ATask } from "../abstracts/task.aclass";
import { ITaskLoader } from "./taskloader.interface";

export interface ITaskManager {
    AddTask(task: ITaskLoader): void;
    EditTask(taskID: number, status: TaskStatus): void;
    DeleteTask(taskID: number): void;
    FindTask(taskID: number): ATask;
    FindTask(taskTitle: string): ATask;
    FindTaskByStatus(taskStatus: TaskStatus): ATask;
}