"use client";

import { CompletedList } from "./CompletedList";
import { ToDoList } from "./ToDoList";
import { ToDoListHeader } from "./ToDoListHeader";

export const ToDoListSection: React.FC = () => {
  return (
    <div className="bg-white h-screen">
      <ToDoListHeader />
      <div className="grid grid-cols-2 gap-4 p-5">
        <div className="border rounded-md">
          <div className="text-sm font-semibold p-4">
            <div className="mb-4">
              <span>To-Do</span>
            </div>
            <ToDoList />
          </div>
        </div>
        <div className="border rounded-md">
          <div className="text-sm font-semibold p-4">
            <div className="mb-4">
              <span>Completed</span>
            </div>
            <CompletedList />
          </div>
        </div>
      </div>
    </div>
  );
};
