"use client";

import { Formik } from "formik";
import { LoginFormInput } from "../types";
import { ToastContainer, toast } from "react-toastify";
import { AxiosError } from "axios";
import { LoginFormSchema } from "../schemas/LoginFormSchema";
import { LoginFormInner } from "./LoginFormInner";
import { useLoginMutation } from "../api/useLoginMutation";
import { useRouter } from "next/navigation";

export const LoginForm: React.FC = () => {
  const { mutateAsync: login } = useLoginMutation();

  const { replace } = useRouter();

  const toRegisterPage = () => {
    replace("/register");
  };

  const toMainMenu = () => {
    replace("/");
  };

  const onSubmit = async (values: LoginFormInput) => {
    try {
      await login({
        email: values.email,
        password: values.password,
      });

      toMainMenu();
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
    <div className="bg-white border w-[432px] h-[460px] rounded-lg">
      <div className="text-[24px] font-normal mt-10 text-center">
        Sign in to <span className="font-semibold">GTask</span>
      </div>
      <Formik<LoginFormInput>
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={onSubmit}
        validationSchema={LoginFormSchema}
        validateOnChange={true}
      >
        <LoginFormInner toRegisterPage={toRegisterPage} />
      </Formik>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
