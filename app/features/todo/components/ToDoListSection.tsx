"use client";

import { useMemo, useState } from "react";
import { useGetToDoList } from "../api/useGetToDoListQuery";
import { CompletedList } from "./CompletedList";
import { ToDoList } from "./ToDoList";
import { ToDoListHeader } from "./ToDoListHeader";
import { ToDoListSkeleton } from "./ToDoListSkeleton";
import { DeleteToDoModal } from "./delete-todo/DeleteToDoModal";
import { UpdateToDoModal } from "./update-todo/UpdateToDoModal";
import { ToDoData } from "../types";
import { ToastContainer } from "react-toastify";

export const ToDoListSection: React.FC = () => {
  const [openDeleteToDoModal, setOpenDeleteToDoModal] = useState(false);
  const [openUpdateToDoModal, setOpenUpdateToDoModal] = useState(false);

  const [toDoData, setToDoData] = useState<ToDoData>({
    id: "",
    is_completed: false,
    name: "",
  });

  const { data: toDoList, isLoading: isLoadingToDoList } = useGetToDoList();

  const onGoingToDos = useMemo(() => {
    if (toDoList) {
      return toDoList.data.filter((todo) => todo.is_completed === false);
    } else {
      return [];
    }
  }, [toDoList]);

  const completedToDos = useMemo(() => {
    if (toDoList) {
      return toDoList.data.filter((todo) => todo.is_completed === true);
    } else {
      return [];
    }
  }, [toDoList]);

  return (
    <div className="bg-white h-screen">
      <ToDoListHeader />
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4 p-5">
        <div className="border rounded-md">
          <div className="text-sm font-semibold p-4">
            <div className="mb-4">
              <span>To-Do</span>
            </div>
            {isLoadingToDoList &&
              (!onGoingToDos.length || !completedToDos.length) && (
                <ToDoListSkeleton />
              )}
            {!!onGoingToDos.length &&
              onGoingToDos.map((onGoingTodo) => {
                return (
                  <ToDoList
                    name={onGoingTodo.name}
                    key={onGoingTodo.id}
                    id={onGoingTodo.id}
                    setOpenUpdateModal={setOpenUpdateToDoModal}
                    setOpenDeleteModal={setOpenDeleteToDoModal}
                    is_completed={onGoingTodo.is_completed}
                    setToDoData={setToDoData}
                  />
                );
              })}
            {!onGoingToDos.length && !isLoadingToDoList && (
              <div>No Data Available</div>
            )}
          </div>
        </div>
        <div className="border rounded-md">
          <div className="text-sm font-semibold p-4">
            <div className="mb-4">
              <span>Completed</span>
            </div>
            {isLoadingToDoList &&
              (!completedToDos.length || !onGoingToDos.length) && (
                <ToDoListSkeleton />
              )}
            {!!completedToDos.length &&
              completedToDos.map((completedToDo) => {
                return (
                  <CompletedList
                    name={completedToDo.name}
                    key={completedToDo.id}
                    id={completedToDo.id}
                    setOpenUpdateModal={setOpenUpdateToDoModal}
                    setOpenDeleteModal={setOpenDeleteToDoModal}
                    is_completed={completedToDo.is_completed}
                    setToDoData={setToDoData}
                  />
                );
              })}
            {!completedToDos.length && !isLoadingToDoList && (
              <div>No Data Available</div>
            )}
          </div>
        </div>
      </div>
      <DeleteToDoModal
        openModal={openDeleteToDoModal}
        setOpenModal={setOpenDeleteToDoModal}
        toDoData={toDoData}
      />
      <UpdateToDoModal
        openModal={openUpdateToDoModal}
        setOpenModal={setOpenUpdateToDoModal}
        toDoData={toDoData}
      />
    </div>
  );
};
