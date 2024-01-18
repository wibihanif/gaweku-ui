import * as yup from "yup";

export const LoginFormSchema = yup.object().shape({
  email: yup.string().required("Email harus diisi"),
  password: yup.string().required("Kata sandi harus diisi"),
});
