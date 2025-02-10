import { TaskStatus } from "../enums/taskstatus.enum";

export abstract class Task {
    private static _totalTasks: number = 0;
    private readonly _ID: number;
    private _title: string;
    private _dedescription: string;
    private _deadline: number;
    private _status: TaskStatus;

    constructor(){
        this._ID = Task._totalTasks;
        Task._totalTasks ++;
    }

    get ID(): number {
        return this._ID;
    }
    get title(): string {
        return this._title;
    }
    get dedescription(): string {
        return this._dedescription;
    }
    get deadline(): number {
        return this._deadline;
    }
    get status(): TaskStatus {
        return this._status;
    }

    set title(value: string) {
        this._title = value;
    }
    set dedescription(value: string) {
        this._dedescription = value;
    }
    set deadline(value: number) {
        this._deadline = value;
    }
    set status(value: TaskStatus) {
        this._status = value;
    }
}