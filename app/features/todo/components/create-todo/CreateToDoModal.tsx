import { Button, Modal } from "flowbite-react";
import { CreateToDoForm } from "./CreateToDoForm";

interface CreateToDoModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

export const CreateToDoModal: React.FC<CreateToDoModalProps> = ({
  openModal,
  setOpenModal,
}) => {
  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header className="text-red-300">Create Task</Modal.Header>
      <CreateToDoForm setOpenModal={setOpenModal} />
    </Modal>
  );
};
