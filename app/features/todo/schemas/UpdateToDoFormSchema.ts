import * as yup from "yup";

export const CreateToDoFormSchema = yup.object().shape({
  name: yup.string().required("Nama task harus diisi"),
});
