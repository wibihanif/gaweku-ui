import { useFormikContext } from "formik";
import {
  CreateToDoFormInput,
  ToDoData,
  UpdateToDoFormInput,
} from "../../types";
import { useState } from "react";
import { Modal } from "flowbite-react";

interface UpdateToDoFormInnerProps {
  toDoData: ToDoData;
}

export const UpdateToDoFormInner: React.FC<UpdateToDoFormInnerProps> = ({
  toDoData,
}) => {
  const { errors, handleSubmit, getFieldProps, setFieldValue, values } =
    useFormikContext<UpdateToDoFormInput>();

  const [isCompletedValue, setIsCompletedValue] = useState("false");

  return (
    <>
      <Modal.Body>
        <div>
          <label className="text-md text-black">Name</label>
          <input
            type="text"
            id="name"
            className="bg-white border block w-full p-2.5 rounded-md text-sm placeholder-gray-400 placeholder-shown:font-light"
            placeholder="Enter new task"
            required
            {...getFieldProps("name")}
          />
          {errors.name && (
            <p className="pt-2 text-sm font-light text-red-500" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div className="flex items-center mt-2">
          <input
            id="isCompleted"
            type="checkbox"
            className="w-5 h-5 text-red-600  border-red-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-red-800 focus:ring-2 dark:bg-red-700 dark:border-red-600"
            {...getFieldProps("isCompleted")}
            value={isCompletedValue === "false" ? "true" : "false"}
            onChange={(event) => {
              setIsCompletedValue(
                isCompletedValue === "false" ? "true" : "false"
              );
              setFieldValue("isCompleted", event.target.value);
            }}
          />
          <span className="ms-2 text-sm font-normal">Completed</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="submit"
          onClick={() => handleSubmit()}
          className="w-full bg-[#B43030] focus:bg-[#B43030] text-white p-2 rounded-md"
        >
          Update Task
        </button>
      </Modal.Footer>
    </>
  );
};
