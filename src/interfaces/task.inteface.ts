import { TaskStatus } from "../enums/taskstatus.enum";

export interface ITask {
    get ID(): number;
    get title(): string;
    get dedescription(): string;
    get deadline(): number;
    get status(): TaskStatus;
    set title(value: string);
    set dedescription(value: string);
    set deadline(value: number);
    set status(value: TaskStatus);
}