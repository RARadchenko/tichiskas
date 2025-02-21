import { TestBed, tick } from "@angular/core/testing";
import { TaskService } from "./task.service";
import { TaskManager } from "../classes/taskmanager.class";
import { Task } from "../classes/task.class";
import { TaskLoader } from "../classes/taskloader.class";
import { TaskStatus } from "../enums/taskstatus.enum";

describe('Task Service', () => {
    let taskService: TaskService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TaskService, TaskManager, Task]
        });
        TaskManager.resetInstance();
        taskService = TestBed.inject(TaskService);
    });

    it('task service created', () => {
        expect(taskService).toBeTruthy();
    });

    it('addTask: Task Stack lenght increas', () => {
        let task1: Task = new Task("tichiska1", "dedescription?", 1739468766);
        let task2: Task = new Task("tichiska2", "dedescription!!!", 1739468769);

        taskService.addTask(new TaskLoader(task1));
        taskService.addTask(new TaskLoader(task2));

        expect(2).toEqual(taskService.taskManager.taskStack.length);
    });

    it('deleteTask: Task Stack lenght decreas', () => {
        let task1: Task = new Task("tichiska1", "dedescription?", 1739468766);
        let task2: Task = new Task("tichiska2", "dedescription!!!", 1739468769);

        taskService.addTask(new TaskLoader(task1));
        taskService.addTask(new TaskLoader(task2));

        taskService.deleteTask(task2.ID);

        expect(1).toEqual(taskService.taskManager.taskStack.length);
    });

    it('editTask: Task status changed', () => {
        let task1: Task = new Task("tichiska1", "dedescription?", 1739468766, TaskStatus.OnHold);
        let task2: Task = new Task("tichiska2", "dedescription!!!", 1739468769);

        taskService.addTask(new TaskLoader(task1));
        taskService.addTask(new TaskLoader(task2));

        let ts_before: TaskStatus = taskService.findTaskByID(task1.ID).status;

        taskService.editTask(task1.ID, 0);

        let ts_after: TaskStatus = taskService.findTaskByID(task1.ID).status;

        expect(ts_before).not.toEqual(ts_after);
    });

    it('findTask: by id', () => {
        let task1: Task = new Task("tichiska1", "dedescription?", 1739468766);
        let task2: Task = new Task("tichiska2", "dedescription!!!", 1739468769);

        taskService.addTask(new TaskLoader(task1));
        taskService.addTask(new TaskLoader(task2));

        expect(Object.getPrototypeOf(task1)).toEqual(Object.getPrototypeOf(taskService.findTaskByID(task1.ID)));
    });

    it('findTask: by title', () => {
        let task1: Task = new Task("tichiska1", "dedescription?", 1739468766);
        let task2: Task = new Task("tichiska2", "dedescription!!!", 1739468769);

        taskService.addTask(new TaskLoader(task1));
        taskService.addTask(new TaskLoader(task2));

        expect(Object.getPrototypeOf(task1)).toEqual(Object.getPrototypeOf(taskService.findTaskByTitle("tichiska1")));
    });

    it('findTask: by status', () => {
        let task1: Task = new Task("tichiska1", "dedescription?", 1739468766, TaskStatus.Done);
        let task2: Task = new Task("tichiska2", "dedescription!!!", 1739468769);

        taskService.addTask(new TaskLoader(task1));
        taskService.addTask(new TaskLoader(task2));

        expect(Object.getPrototypeOf(task1)).toEqual(Object.getPrototypeOf(taskService.findTaskByStatus(TaskStatus.Done)));
    });
});
