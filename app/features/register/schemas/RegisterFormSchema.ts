import * as yup from "yup";

export const RegisterFormSchema = yup.object().shape({
  email: yup.string().required("Email harus diisi"),
  password: yup.string().required("Kata sandi harus diisi"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Konfirmasi kata sandi harus sama dengan kata sandi"
    )
    .required("Kata sandi harus diisi"),
});
