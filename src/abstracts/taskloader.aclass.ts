import { ITaskOption } from "../interfaces/taskoption.interface";
import { ATask } from "./task.aclass";

/**
 * Abstract class responsible for loading tasks with optional configurations.
 */
export abstract class ATaskLoader {
    /**
     * Creates a new instance of ITaskLoader.
     * @param {ATask} _task - The task to be loaded.
     * @param {ITaskOption | null} _taskOption - Optional task configurations (e.g., priority).
     */
    constructor(private _task: ATask, private _taskOption: ITaskOption | null = null) {}

    /**
     * Gets the task associated with this loader.
     * @returns {ATask} - The loaded task.
     */
    get task(): ATask {
        return this._task;
    }

    /**
     * Gets the optional task settings.
     * @returns {ITaskOption | null} - The task options, or null if none were provided.
     */
    get taskOption(): ITaskOption | null {
        return this._taskOption;
    }
}