export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "pending" | "in-progress" | "completed";
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskRequest {
  title: string;
  description?: string;
  status?: "pending" | "in-progress" | "completed";
}

export interface UpdateTaskRequest {
  id: string;
  title?: string;
  description?: string;
  status?: "pending" | "in-progress" | "completed";
}
