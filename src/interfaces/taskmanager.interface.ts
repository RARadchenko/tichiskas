import { TaskStatus } from "../enums/taskstatus.enum";
import { ITask } from "./task.interface";

export abstract class ITaskManager<T> {
    private static _instance: any;
    protected _taskStack: ITask[] = [];
  
    protected constructor() {
        if ((this.constructor as any)._instance) {
            throw new Error("Instance already exists! Use getInstance() instead.");
        }
        (this.constructor as any)._instance = this;
    }
  
    static getInstance<T>(this: new () => T): T {
        if (!(this as any)._instance) {
            (this as any)._instance = new this();
        }
        return (this as any)._instance;
    }

    abstract AddTask(task: ITask): void;

    abstract EditTask(taskID: number, status: TaskStatus): void;

    abstract DeleteTask(taskID: number): void;

    abstract FindTask(taskID: number): ITask;

    abstract FindTask(taskTitle: string): ITask;

    abstract FindTask(taskStatus: TaskStatus): ITask;
}