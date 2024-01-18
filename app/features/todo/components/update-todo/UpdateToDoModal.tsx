import { Button, Modal } from "flowbite-react";
import { ToDoData } from "../../types";
import { UpdateToDoForm } from "./UpdateToDoForm";

interface UpdateToDoModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  toDoData: ToDoData;
}

export const UpdateToDoModal: React.FC<UpdateToDoModalProps> = ({
  openModal,
  setOpenModal,
  toDoData,
}) => {
  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header className="text-red-300">Edit Task</Modal.Header>
      <UpdateToDoForm setOpenModal={setOpenModal} toDoData={toDoData} />
    </Modal>
  );
};
