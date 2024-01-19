"use client";

import { Formik } from "formik";
import { CreateToDoFormInner } from "./CreateToDoFormInner";
import { CreateToDoFormInput } from "../../types";
import { AxiosError } from "axios";
import { useCreateToDoMutation } from "../../api/useCreateToDoMutation";
import { CreateToDoFormSchema } from "../../schemas/CreateToDoFormSchema";
import { useGetToDoList } from "../../api/useGetToDoListQuery";
import toast from "react-hot-toast";

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

      return toast("Task Successfully Created", {
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
