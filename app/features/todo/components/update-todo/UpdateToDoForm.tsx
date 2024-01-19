"use client";

import { Formik } from "formik";
import {
  CreateToDoFormInput,
  ToDoData,
  UpdateToDoFormInput,
} from "../../types";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { CreateToDoFormSchema } from "../../schemas/CreateToDoFormSchema";
import { useGetToDoList } from "../../api/useGetToDoListQuery";
import { UpdateToDoFormInner } from "./UpdateToDoFormInner";
import { useUpdateToDoMutation } from "../../api/useUpdateToDoMutation";

interface UpdateToDoFormProps {
  setOpenModal: (value: boolean) => void;
  toDoData: ToDoData;
}

export const UpdateToDoForm: React.FC<UpdateToDoFormProps> = ({
  setOpenModal,
  toDoData,
}) => {
  const { mutateAsync: updateToDo } = useUpdateToDoMutation();
  const { refetch: refetchToDoList } = useGetToDoList();

  const onSubmit = async (values: UpdateToDoFormInput) => {
    const isCompleteBooleanValue = JSON.parse(values.isCompleted);

    try {
      await updateToDo({
        id: toDoData.id,
        is_completed: isCompleteBooleanValue,
        name: values.name,
      });

      setOpenModal(false);

      await refetchToDoList();

      return toast("Task Successfully Updated", {
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
    <div>
      <Formik<CreateToDoFormInput>
        initialValues={{
          isCompleted: String(toDoData.is_completed),
          name: toDoData.name,
        }}
        onSubmit={onSubmit}
        validateOnChange={true}
        validationSchema={CreateToDoFormSchema}
        enableReinitialize
      >
        <UpdateToDoFormInner toDoData={toDoData} />
      </Formik>
    </div>
  );
};
