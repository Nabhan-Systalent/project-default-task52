'use client';

import { useState } from 'react';
import { Task, KanbanBoardProps } from './ProjectBoard.types';

const COLUMNS = [
  { id: 'todo', label: 'To Do' },
  { id: 'in-progress', label: 'In Progress' },
  { id: 'done', label: 'Done' },
] as const;

export function KanbanBoard({ initialTasks = [] }: KanbanBoardProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const moveTask = (taskId: string, newStatus: Task['status']) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
  };

  return (
    <div className="flex gap-6 p-6 h-full overflow-x-auto bg-gray-50">
      {COLUMNS.map(column => (
        <div key={column.id} className="flex flex-col w-80 shrink-0">
          <h2 className="font-semibold text-gray-700 mb-4">{column.label}</h2>
          <div className="flex-1 bg-gray-100 rounded-lg p-3 space-y-3">
            {tasks
              .filter(t => t.status === column.id)
              .map(task => (
                <div
                  key={task.id}
                  onClick={() => setSelectedTask(task)}
                  className="p-4 bg-white rounded shadow-sm border border-gray-200 cursor-pointer hover:border-blue-400 transition-colors"
                >
                  <h3 className="font-medium text-gray-900">{task.title}</h3>
                </div>
              ))}
          </div>
        </div>
      ))}

      {selectedTask && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4">{selectedTask.title}</h2>
            <p className="text-gray-600 mb-6">{selectedTask.description || 'No description provided.'}</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setSelectedTask(null)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
