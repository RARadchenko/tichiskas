/**
 * Defines the possible statuses of a task.
 * - `Done` - The task has been completed.
 * - `InProgress` - The task is currently being worked on.
 * - `OnHold` - The task is temporarily paused.
 * - `Pending` - The task is awaiting action.
 * - `Canceled` - The task has been canceled and will not be completed.
 */
export enum TaskStatus
{
    Done,
    InProgress,
    OnHold,
    Pending,
    Canceled
}