import { Button, Modal } from "flowbite-react";
import { ToDoData } from "../../types";
import { useDeleteToDoMutation } from "../../api/useDeleteToDoMutation";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useGetToDoList } from "../../api/useGetToDoListQuery";

interface DeleteToDoModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  toDoData: ToDoData;
}

export const DeleteToDoModal: React.FC<DeleteToDoModalProps> = ({
  openModal,
  setOpenModal,
  toDoData,
}) => {
  const { mutateAsync: deleteToDo } = useDeleteToDoMutation();
  const { refetch: refetchToDoList } = useGetToDoList();

  const onDeleteToDo = async () => {
    try {
      await deleteToDo({
        toDoId: toDoData.id,
      });

      setOpenModal(false);

      await refetchToDoList();

      toast.success("Task successfully deleted", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (e) {
      const err = e as AxiosError<{ errors: string[] }>;
      const errors = err.response?.data?.errors;

      if (errors && errors.length !== 0) {
        toast.error(errors.join(" "), {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error(err.message, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header className="text-red-300">Delete Task</Modal.Header>
      <Modal.Body>
        <div>
          <p className="text-base leading-relaxed text-black dark:text-gray-400">
            Are you sure to delete this task?
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="submit"
          onClick={() => onDeleteToDo()}
          className="w-full bg-[#B43030] focus:bg-[#B43030] text-white p-2 rounded-md"
        >
          Delete Task
        </button>
      </Modal.Footer>
    </Modal>
  );
};
