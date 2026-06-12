export interface CreateTask {
  title: string;
  description?: string;
  done?: boolean;
}

export interface UpdateTask {
  title?: string;
  description?: string;
  done?: boolean;
}

export interface Task {
  title: string;
  description?: string;
  done?: boolean;
  _id: string;
  createdAt: string;
}

export interface AppState {
  tasks: Task[];
  loadingTasks: boolean;
}
