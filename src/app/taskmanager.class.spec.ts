import { TaskManager } from '../classes/taskmanager.class';
import { TaskStatus } from '../enums/taskstatus.enum';
import { ITask } from '../interfaces/task.inteface';
import { ATaskLoader } from '../abstracts/taskloader.aclass';
import { ATask } from '../abstracts/task.aclass';
import { Task } from '../classes/task.class';


class MockTaskLoader extends ATaskLoader {
    constructor(_task: Task) {
        super(_task);
    }
}

describe('TaskManager', () => {
    let manager: TaskManager;
    let task1: MockTaskLoader;
    let task2: MockTaskLoader;

    beforeEach(() => {
        manager = new TaskManager();

        task1 = new  MockTaskLoader(
            new Task('Test Task 1','desc 1',100000000,TaskStatus.Pending));

        task2 = new MockTaskLoader(new Task('Test Task 2','desc 2',99999999,TaskStatus.Pending));

        manager.AddTask(task1);
        manager.AddTask(task2);
    });

    it('should add tasks correctly', () => {
        expect((manager as any)._taskStack.length).toBe(2);
        
    });

    it('should edit task status correctly', () => {
        manager.EditTask(1, TaskStatus.Done);
        const updatedTask = manager.FindTask(1);
        expect(updatedTask.status).toBe(TaskStatus.Done);
    });

    it('should throw error if task to edit not found', () => {
        expect(() => manager.EditTask(999, TaskStatus.Done)).toThrowError('Index of task id999 was not found.');
    });

    it('should delete task correctly', () => {
        manager.DeleteTask(1);
        expect((manager as any)._taskStack.length).toBe(1);
        expect(() => manager.FindTask(1)).toThrow();
    });

    it('should throw error if task to delete not found', () => {
        expect(() => manager.DeleteTask(999)).toThrowError('Index of task id999 was not found.');
    });

    it('should find task by ID', () => {
        const foundTask = manager.FindTask(2);
        expect(foundTask.title).toBe('Test Task 2');
    });

    it('should throw error if task by ID not found', () => {
        expect(() => manager.FindTask(999)).toThrowError('Index of task id999 was not found.');
    });

    it('should find task by title', () => {
        const foundTask = manager.FindTask('Test Task 1');
        expect(foundTask.ID).toBe(1);
    });

    it('should throw error if task by title not found', () => {
        expect(() => manager.FindTask('Unknown Task')).toThrowError('Task by title "Unknown Task" was not found.');
    });

    it('should find task by status', () => {
        const foundTask = manager.FindTaskByStatus(TaskStatus.Done);
        expect(foundTask.ID).toBe(2);
    });

    it('should throw error if task by status not found', () => {
        expect(() => manager.FindTaskByStatus(TaskStatus.InProgress)).toThrowError('Task by status "2" was not found.');
    });
});