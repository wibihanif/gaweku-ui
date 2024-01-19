"use client";

import { Formik } from "formik";
import { CreateToDoFormInner } from "./CreateToDoFormInner";
import { CreateToDoFormInput } from "../../types";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useCreateToDoMutation } from "../../api/useCreateToDoMutation";
import { CreateToDoFormSchema } from "../../schemas/CreateToDoFormSchema";
import { useGetToDoList } from "../../api/useGetToDoListQuery";

interface CreateToDoFormProps {
  setOpenModal: (value: boolean) => void;
}

export const CreateToDoForm: React.FC<CreateToDoFormProps> = ({
  setOpenModal,
}) => {
  const { mutateAsync: createToDo } = useCreateToDoMutation();
  const { refetch: refetchToDoList } = useGetToDoList();

  const onSubmit = async (values: CreateToDoFormInput) => {
    const isCompleteBooleanValue = JSON.parse(values.isCompleted);

    try {
      await createToDo({
        is_completed: isCompleteBooleanValue,
        name: values.name,
      });

      setOpenModal(false);

      await refetchToDoList();

      return toast.success("Task successfully created", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
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
    <div>
      <Formik<CreateToDoFormInput>
        initialValues={{
          isCompleted: "false",
          name: "",
        }}
        onSubmit={onSubmit}
        validateOnChange={true}
        validationSchema={CreateToDoFormSchema}
        enableReinitialize
      >
        <CreateToDoFormInner />
      </Formik>
    </div>
  );
};
