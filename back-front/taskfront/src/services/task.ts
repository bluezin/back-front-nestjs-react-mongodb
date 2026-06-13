import type { CreateTask, UpdateTask } from "../interfaces/tasks.interface";

const API_URL = import.meta.env.VITE_API_URL;

export const getAlltaskService = () => fetch(`${API_URL}/tasks`);

export const creatTaskService = (task: CreateTask) =>
  fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

export const editTaskService = (task: UpdateTask, id: string) =>
  fetch(`${API_URL}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

export const deleteTaskService = (id: string) =>
  fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
