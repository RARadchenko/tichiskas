import { TaskPriority } from "../enums/taskpriority.enums";

export interface ITaskOption {
    get priority(): TaskPriority | null;
}