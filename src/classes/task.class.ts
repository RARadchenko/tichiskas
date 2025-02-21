import { TaskStatus } from "../enums/taskstatus.enum";
import { ITask } from "../interfaces/task.interface";

export class Task extends ITask {
    constructor(title: string = "", dedescription: string = "", deadline: number = 0, status: TaskStatus = 3) {
        super(title, dedescription, deadline, status);
    }
}