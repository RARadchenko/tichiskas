import { TaskStatus } from "../enums/taskstatus.enum";

/**
 * Abstract class representing a task.
 * This class serves as a blueprint for creating tasks with an ID, title, description, deadline, and status.
 * It also tracks the total number of tasks created.
 */
export abstract class ITask {
    // Static variable to keep track of the total number of tasks created
    private static _totalTasks: number = 0;
    
    // Unique identifier for each task
    private readonly _ID: number;
    
    // Task title
    private _title: string;
    
    // Task description
    private _dedescription: string;
    
    // Deadline represented as a timestamp
    private _deadline: number;
    
    // Status of the task
    private _status: TaskStatus;

    /**
     * Constructor for the ITask class.
     * Initializes the task with a unique ID and increments the total task count.
     */
    constructor() {
        this._ID = ITask._totalTasks;
        ITask._totalTasks++;
    }

    // Getter for the task ID
    get ID(): number {
        return this._ID;
    }

    // Getter for the task title
    get title(): string {
        return this._title;
    }

    // Getter for the task description
    get dedescription(): string {
        return this._dedescription;
    }

    // Getter for the task deadline
    get deadline(): number {
        return this._deadline;
    }

    // Getter for the task status
    get status(): TaskStatus {
        return this._status;
    }

    // Setter for the task title
    set title(value: string) {
        this._title = value;
    }

    // Setter for the task description
    set dedescription(value: string) {
        this._dedescription = value;
    }

    // Setter for the task deadline
    set deadline(value: number) {
        this._deadline = value;
    }

    // Setter for the task status
    set status(value: TaskStatus) {
        this._status = value;
    }
}
