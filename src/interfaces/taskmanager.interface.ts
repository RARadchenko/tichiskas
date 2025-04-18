import { TaskStatus } from "../enums/taskstatus.enum";
import { ITask } from "./task.inteface";
import { ITaskLoader } from "./taskloader.interface";

export interface ITaskManager {
    get taskStack(): ITaskLoader[];
    AddTask(task: ITaskLoader): void;
    EditTask(taskID: number, status: TaskStatus): void;
    DeleteTask(taskID: number): void;
    FindTask(taskID: number): ITask;
    FindTask(taskTitle: string): ITask;
    FindTaskByStatus(taskStatus: TaskStatus): ITask;
}