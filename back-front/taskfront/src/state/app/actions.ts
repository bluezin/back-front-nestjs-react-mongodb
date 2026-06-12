import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  creatTaskService,
  deleteTaskService,
  editTaskService,
  getAlltaskService,
} from "../../services/task";
import type { CreateTask, UpdateTask } from "../../interfaces/tasks.interface";

export const getAlltask = createAsyncThunk("tasks/getAllTasks", async () => {
  const response = await getAlltaskService();
  return response.json();
});

export const editTask = createAsyncThunk(
  "tasks/editTask",
  async (body: { task: UpdateTask; id: string }) => {
    const response = await editTaskService(body.task, body.id);
    return response.json();
  },
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (body: { id: string }) => {
    await deleteTaskService(body.id);
    return { id: body.id };
  },
);

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (body: CreateTask) => {
    const response = await creatTaskService(body);
    return response.json();
  },
);
