export interface Note {
  id: string;
  content: string;
  taskId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNoteRequest {
  taskId: string;
  content: string;
}

export interface UpdateNoteRequest {
  taskId: string;
  noteId: string;
  content: string;
}

export interface DeleteNoteRequest {
  taskId: string;
  noteId: string;
}
