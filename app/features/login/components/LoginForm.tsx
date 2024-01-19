"use client";

import { Formik } from "formik";
import { LoginFormInput } from "../types";
import { AxiosError } from "axios";
import { LoginFormSchema } from "../schemas/LoginFormSchema";
import { LoginFormInner } from "./LoginFormInner";
import { useLoginMutation } from "../api/useLoginMutation";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

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
    <div className="bg-white border w-screen h-auto pb-20 sm:pb-0 sm:w-[432px] sm:h-[460px] rounded-lg">
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
    </div>
  );
};
