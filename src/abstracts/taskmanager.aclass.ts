import { TaskStatus } from "../enums/taskstatus.enum";
import { ATask } from "./task.aclass";
import { ITaskLoader } from "../interfaces/taskloader.interface";
import { ITaskManager } from "../interfaces/taskmanager.interface";
import { ATaskLoader } from "./taskloader.aclass";

/**
 * Abstract class for managing tasks.
 * Provides a singleton instance and defines essential task management operations.
 * 
 * @template T - The type of the concrete implementation.
 */
export abstract class ATaskManager<T> implements ITaskManager {
    // Singleton instance of the task manager
    private static _instance: any;

    // Stack of tasks managed by the task manager
    protected _taskStack: ATaskLoader[] = [];
    get taskStack(): ATaskLoader[] {
        return this._taskStack;
    }

    /**
     * Protected constructor to enforce singleton pattern.
     * Throws an error if an instance already exists.
     */
    protected constructor(protected taskLoaderFactory: () => ITaskLoader[]) {
        if ((this.constructor as any)._instance) {
            throw new Error("Instance already exists! Use getInstance() instead.");
        }
        (this.constructor as any)._instance = this;
        this._taskStack = taskLoaderFactory();
    }

    /**
     * Returns the singleton instance of the task manager.
     * Creates a new instance if none exists.
     *
     * @returns {T} - The singleton instance.
     */
    static getInstance<T>(this: new (taskLoaderFactory: () => ITaskLoader[]) => T, taskLoaderFactory: () => ITaskLoader[]): T {
        if (!(this as any)._instance) {
            (this as any)._instance = new this(taskLoaderFactory);
        }
        return (this as any)._instance;
    }

    static resetInstance<T>(this: new () => T): void {
        (this as any)._instance = null;
    }

    /**
     * Adds a new task to the task manager.
     * @param {ITaskLoader} task - The task to add.
     */
    abstract AddTask(task: ITaskLoader): void;

    /**
     * Edits the status of a task based on its ID.
     * @param {number} taskID - The ID of the task to edit.
     * @param {TaskStatus} status - The new status of the task.
     */
    abstract EditTask(taskID: number, status: TaskStatus): void;

    /**
     * Deletes a task from the manager based on its ID.
     * @param {number} taskID - The ID of the task to delete.
     */
    abstract DeleteTask(taskID: number): void;

    /**
     * Finds a task by its ID.
     * @param {number} taskID - The ID of the task to find.
     * @returns {ITask} - The found task.
     */
    abstract FindTask(taskID: number): ATask;

    /**
     * Finds a task by its title.
     * @param {string} taskTitle - The title of the task to find.
     * @returns {ITask} - The found task.
     */
    abstract FindTask(taskTitle: string): ATask;

    /**
     * Finds a task by its status.
     * @param {TaskStatus} taskStatus - The status of the task to find.
     * @returns {ITask} - The found task.
     */
    abstract FindTaskByStatus(taskStatus: TaskStatus): ATask;
}