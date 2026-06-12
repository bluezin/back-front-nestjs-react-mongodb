import { createSlice } from "@reduxjs/toolkit";
import { createTask, deleteTask, editTask, getAlltask } from "./actions";
import type { AppState } from "../../interfaces/tasks.interface";

const initialState: AppState = {
  tasks: [],
  loadingTasks: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAlltask.pending, (state) => {
        state.loadingTasks = true;
      })
      .addCase(getAlltask.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loadingTasks = false;
      })
      .addCase(getAlltask.rejected, (state) => {
        state.loadingTasks = false;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(
          (item) => item._id !== action.payload.id,
        );
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks = [...state.tasks, action.payload];
      })
      .addCase(editTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.map((item) =>
          item._id === action.payload._id
            ? {
                ...item,
                done: action.payload.done,
              }
            : item,
        );
      });
  },
});

export default appSlice.reducer;
