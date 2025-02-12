import { Component } from "@angular/core";
import { TaskManager } from "../classes/taskmanager.class";
import { ITaskLoader } from "../interfaces/taskloader.interface";

@Component({
    selector: 'task-comp',
    standalone: true
})
export class TaskComponent {
    constructor(public taskManager: TaskManager) {}

    addTask(task: ITaskLoader) {
        this.taskManager.AddTask(task);
    }
}