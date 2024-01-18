import { Button, Modal } from "flowbite-react";
import { ToDoData } from "../../types";

interface UpdateToDoModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  toDoData: ToDoData | {};
}

export const UpdateToDoModal: React.FC<UpdateToDoModalProps> = ({
  openModal,
  setOpenModal,
  toDoData,
}) => {
  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header className="text-red-300">Edit Task</Modal.Header>
      <Modal.Body>
        <div>
          <label className="text-md text-black">Name</label>
          <input
            type="email"
            id="email"
            className="bg-white border block w-full p-2.5 rounded-md text-sm placeholder-gray-400 placeholder-shown:font-light"
            placeholder="Edit task"
            required
          />
        </div>
        <div className="flex items-center mt-2">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-5 h-5 text-red-600  border-red-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-red-800 focus:ring-2 dark:bg-red-700 dark:border-red-600"
          />
          <span className="ms-2 text-sm font-normal">Completed</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => setOpenModal(false)}
          className="w-full bg-[#B43030]"
        >
          Update Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
