import { TaskStatus } from "../enums/taskstatus.enum";
import { Task } from "./task.interface";

abstract class ITaskManager<T> {
    private static _instance: any;
  
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

    abstract AddTask(task: Task): void;

    abstract EditTask(taskID: number): void;

    abstract DeleteTask(taskID: number): void;

    abstract FindTask(taskID: number): Task;

    abstract FindTask(taskTitle: string): Task;

    abstract FindTask(taskStatus: TaskStatus): Task;
}