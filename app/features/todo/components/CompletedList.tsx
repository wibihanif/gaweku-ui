import { CheckIcon } from "lucide-react";
import { ToDoData } from "../types";

interface CompletedListProps {
  name: string;
  id: string;
  is_completed: boolean;
  setOpenUpdateModal: (value: boolean) => void;
  setOpenDeleteModal: (value: boolean) => void;
  setToDoData: (value: ToDoData) => void;
}

export const CompletedList: React.FC<CompletedListProps> = ({
  name,
  id,
  is_completed,
  setOpenDeleteModal,
  setOpenUpdateModal,
  setToDoData,
}) => {
  const openUpdateModal = (value: ToDoData) => {
    setToDoData(value);
    setOpenUpdateModal(true);
  };

  const openDeleteModal = (value: ToDoData) => {
    setToDoData(value);
    setOpenDeleteModal(true);
  };

  return (
    <div className="flex">
      <div className="mb-4 p-3 border rounded-md flex justify-between w-full">
        <div className="flex items-center">
          <CheckIcon
            color="white"
            className="bg-[#B43030] rounded-md p-0.5"
            size={18}
          />
          <span className="ms-2 text-xs font-normal line-through">{name}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="border border-slate-300 p-0.5 rounded-md"
            onClick={() =>
              openUpdateModal({
                id,
                is_completed,
                name,
              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M10 4.00001L12 6.00001M8.66667 13.3333H14M3.33333 10.6667L2.66667 13.3333L5.33333 12.6667L13.0573 4.94267C13.3073 4.69264 13.4477 4.35356 13.4477 4.00001C13.4477 3.64645 13.3073 3.30738 13.0573 3.05734L12.9427 2.94267C12.6926 2.69271 12.3536 2.55229 12 2.55229C11.6464 2.55229 11.3074 2.69271 11.0573 2.94267L3.33333 10.6667Z"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            className="border border-slate-300 p-0.5 rounded-md"
            onClick={() =>
              openDeleteModal({
                id,
                is_completed,
                name,
              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13.6667 4H2.33334M12.5553 5.66667L12.2487 10.2667C12.1307 12.036 12.072 12.9207 11.4953 13.46C10.9187 14 10.0313 14 8.258 14H7.742C5.96867 14 5.08134 14 4.50467 13.46C3.928 12.9207 3.86867 12.036 3.75134 10.2667L3.44467 5.66667M6.33334 7.33333L6.66667 10.6667M9.66667 7.33333L9.33334 10.6667"
                stroke="#F23838"
                stroke-linecap="round"
              />
              <path
                d="M4.33334 4H4.40667C4.67497 3.99314 4.93495 3.90548 5.15262 3.74847C5.37029 3.59147 5.53551 3.37243 5.62667 3.12L5.64934 3.05133L5.714 2.85733C5.76934 2.69133 5.79734 2.60867 5.834 2.538C5.90614 2.39959 6.00968 2.27999 6.13632 2.18877C6.26297 2.09755 6.4092 2.03724 6.56334 2.01267C6.64134 2 6.72867 2 6.90334 2H9.09667C9.27134 2 9.35867 2 9.43667 2.01267C9.5908 2.03724 9.73704 2.09755 9.86369 2.18877C9.99033 2.27999 10.0939 2.39959 10.166 2.538C10.2027 2.60867 10.2307 2.69133 10.286 2.85733L10.3507 3.05133C10.4352 3.33218 10.6099 3.57734 10.8478 3.74884C11.0857 3.92034 11.3735 4.00862 11.6667 4"
                stroke="#F23838"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
