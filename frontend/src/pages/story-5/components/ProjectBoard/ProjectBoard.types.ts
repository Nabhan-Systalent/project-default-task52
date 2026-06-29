export interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  description?: string;
}

export interface KanbanBoardProps {
  initialTasks?: Task[];
}
