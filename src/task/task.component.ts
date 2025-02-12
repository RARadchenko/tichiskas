import { Component } from "@angular/core";
import { TaskManager } from "../classes/taskmanager.class";
import { ITaskLoader } from "../interfaces/taskloader.interface";
import { ITask } from "../interfaces/task.interface";
import { TaskStatus } from "../enums/taskstatus.enum";

@Component({
    selector: 'task-comp',
    standalone: true
})
export class TaskComponent {
    constructor(public taskManager: TaskManager) {}

    addTask(task: ITaskLoader) {
        this.taskManager.AddTask(task);
    }

    editTask(taskID: number, status: TaskStatus) {
        this.taskManager.EditTask(taskID, status);
    }

    deleteTask(taskID: number) {
        this.taskManager.DeleteTask(taskID);
    }

    findTaskByID(taskID: number): ITask {
        return this.taskManager.FindTask(taskID);
    }

    findTaskByTitle(taskTitle: string): ITask {
        return this.taskManager.FindTask(taskTitle);
    }

    findTaskByStatus(taskStatus: TaskStatus): ITask {
        return this.taskManager.FindTask(taskStatus);
    }
}