import { TaskStatus } from "../enums/taskstatus.enum";
import { ITaskLoader } from "./taskloader.interface";
import { ITask } from "./task.inteface";

export interface ITaskManager {
    AddTask(task: ITaskLoader): void;
    EditTask(taskID: number, status: TaskStatus): void;
    DeleteTask(taskID: number): void;
    FindTask(taskID: number): ITask;
    FindTask(taskTitle: string): ITask;
    FindTaskByStatus(taskStatus: TaskStatus): ITask;
}