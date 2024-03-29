export interface ToDoData {
  id: string;
  name: string;
  is_completed: boolean;
}

export interface CreateToDoFormInput {
  name: string;
  isCompleted: string;
}

export interface UpdateToDoFormInput {
  name: string;
  isCompleted: string;
}
