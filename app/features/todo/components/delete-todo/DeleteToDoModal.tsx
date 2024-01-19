import { Modal } from "flowbite-react";
import { ToDoData } from "../../types";
import { useDeleteToDoMutation } from "../../api/useDeleteToDoMutation";
import toast from "react-hot-toast";
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

      return toast("Task Successfully Deleted", {
        duration: 4000,
        position: "top-center",
        style: {
          color: "green",
        },
        className: "",
        icon: "👏",
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
    } catch (e) {
      const err = e as AxiosError<{ errors: string[] }>;
      const errors = err.response?.data?.errors;

      if (errors && errors.length !== 0) {
        toast(errors.join(" "), {
          duration: 4000,
          position: "top-center",
          style: {
            color: "red",
          },
          className: "",
          icon: "👏",
          iconTheme: {
            primary: "#000",
            secondary: "#fff",
          },
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
      } else {
        toast(err.message, {
          duration: 4000,
          position: "top-center",
          style: {
            color: "red",
          },
          className: "",
          icon: "👏",
          iconTheme: {
            primary: "#000",
            secondary: "#fff",
          },
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
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
