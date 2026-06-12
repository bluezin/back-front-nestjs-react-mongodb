import type { CreateTask, UpdateTask } from "../interfaces/tasks.interface";

export const getAlltaskService = () => fetch(`/api/tasks`);

export const creatTaskService = (task: CreateTask) =>
  fetch(`/api/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

export const editTaskService = (task: UpdateTask, id: string) =>
  fetch(`/api/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

export const deleteTaskService = (id: string) =>
  fetch(`/api/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
