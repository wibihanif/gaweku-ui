"use client";

import { useRouter } from "next/navigation";
import { RegisterFormInner } from "./RegisterFormInner";
import { useRegisterMutation } from "../api/useRegisterMutation";
import { AxiosError } from "axios";
import { RegisterFormInput } from "../types";
import { Formik } from "formik";
import { RegisterFormSchema } from "../schemas/RegisterFormSchema";
import toast from "react-hot-toast";

export const RegisterForm: React.FC = () => {
  const { mutateAsync: register } = useRegisterMutation();

  const { replace } = useRouter();

  const toLoginPage = () => {
    replace("/login");
  };

  const onSubmit = async (values: RegisterFormInput) => {
    try {
      await register({
        email: values.email,
        password: values.password,
        confirm_password: values.confirmPassword,
      });

      toLoginPage();
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
    <div className="bg-white border w-screen h-auto pb-20 sm:w-[432px] sm:h-[580px] rounded-lg">
      <div className="text-[24px] font-normal mt-10 text-center">
        Sign up to <span className="font-semibold">GTask</span>
      </div>
      <Formik<RegisterFormInput>
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={onSubmit}
        validateOnChange={true}
        validationSchema={RegisterFormSchema}
      >
        <RegisterFormInner toLoginPage={toLoginPage} />
      </Formik>
    </div>
  );
};
