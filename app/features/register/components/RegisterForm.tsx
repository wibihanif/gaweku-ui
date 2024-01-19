"use client";

import { useRouter } from "next/navigation";
import { RegisterFormInner } from "./RegisterFormInner";
import { useRegisterMutation } from "../api/useRegisterMutation";
import { AxiosError } from "axios";
import { ToastContainer, toast } from "react-toastify";
import { RegisterFormInput } from "../types";
import { Formik } from "formik";
import { RegisterFormSchema } from "../schemas/RegisterFormSchema";

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
