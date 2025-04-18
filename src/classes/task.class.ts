import { TaskStatus } from "../enums/taskstatus.enum";
import { ATask } from "../abstracts/task.aclass";

export class Task extends ATask {
    constructor(title: string = "", dedescription: string = "", deadline: number = 0, status: TaskStatus = 3) {
        super(title, dedescription, deadline, status);
    }
}