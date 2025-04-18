import { ITaskOption } from "./taskoption.interface"; 
import { ITask } from "./task.inteface";

export interface ITaskLoader {
    get task(): ITask;
    get taskOption(): ITaskOption | null;
}