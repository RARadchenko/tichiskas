import { ITaskOption } from "./taskoption.interface"; 
import { ITask } from "./task.inteface";
import { ATask } from "../abstracts/task.aclass";

export interface ITaskLoader {
    get task(): ATask;
    get taskOption(): ITaskOption | null;
}