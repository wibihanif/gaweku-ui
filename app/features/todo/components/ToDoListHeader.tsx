import { PlusIcon } from "lucide-react";

export const ToDoListHeader = () => {
  return (
    <div className="p-5 mx-5 border-b-[1px] flex items-center gap-10">
      <div className="font-semibold text-lg">To-Do List</div>
      <div>
        <button className="text-xs font-semibold flex items-center gap-2 border p-1 px-3 rounded-md">
          <span>Add Task</span>
          <PlusIcon size={15} />
        </button>
      </div>
    </div>
  );
};
