import axios from "axios";
import { UseMutationOptions, useMutation } from "react-query";

interface RegisterArgs {
  email: string;
  password: string;
  confirm_password: string;
}

export const useRegisterMutation = (
  options?: UseMutationOptions<void, unknown, RegisterArgs>
) => {
  return useMutation(
    async ({ email, password, confirm_password }: RegisterArgs) => {
      await axios.post("https://jfe-test.devto.top/auth/sign-up", {
        email,
        password,
        confirm_password,
      });
    },
    options
  );
};
