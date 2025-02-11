import { TaskPriority } from "../enums/taskpriority.enums";

/**
 * Abstract class representing task options.
 * Provides an optional priority setting for a task.
 */
export abstract class ITaskOption {
    /**
     * Creates a new instance of ITaskOption.
     * @param {TaskPriority | null} _priority - The priority level of the task (optional).
     */
    constructor(private _priority: TaskPriority | null = null) {}

    /**
     * Gets the priority of the task.
     * @returns {TaskPriority | null} - The priority level of the task or null if not set.
     */
    get priority(): TaskPriority | null {
        return this._priority;
    }
}