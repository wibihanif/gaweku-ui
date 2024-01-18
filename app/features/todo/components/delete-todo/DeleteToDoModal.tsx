import { Button, Modal } from "flowbite-react";
import { ToDoData } from "../../types";

interface DeleteToDoModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  toDoData: ToDoData | {};
}

export const DeleteToDoModal: React.FC<DeleteToDoModalProps> = ({
  openModal,
  setOpenModal,
  toDoData,
}) => {
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
        <Button
          onClick={() => setOpenModal(false)}
          className="w-full bg-[#B43030]"
        >
          Delete Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
