import { Injectable } from "@angular/core";
import { TaskManager } from "../classes/taskmanager.class"; 
import { ATaskLoader } from "../abstracts/taskloader.aclass"; 
import { ATask } from "../abstracts/task.aclass"; 
import { TaskStatus } from "../enums/taskstatus.enum"; 

@Injectable()
export class TaskService {
    constructor(public taskManager: TaskManager) {}

    addTask(task: ATaskLoader) {
        this.taskManager.AddTask(task);
    }

    editTask(taskID: number, status: TaskStatus) {
        this.taskManager.EditTask(taskID, status);
    }

    deleteTask(taskID: number) {
        this.taskManager.DeleteTask(taskID);
    }

    findTaskByID(taskID: number): ATask {
        return this.taskManager.FindTask(taskID);
    }

    findTaskByTitle(taskTitle: string): ATask {
        return this.taskManager.FindTask(taskTitle);
    }

    findTaskByStatus(taskStatus: TaskStatus): ATask {
        return this.taskManager.FindTask(taskStatus);
    }
}