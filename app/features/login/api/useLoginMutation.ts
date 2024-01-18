import { useStore } from "@/app/stores";
import axios from "axios";
import { UseMutationOptions, useMutation } from "react-query";

interface LoginArgs {
  email: string;
  password: string;
}

export const useLoginMutation = (
  options?: UseMutationOptions<void, unknown, LoginArgs>
) => {
  const { onAuthSuccess } = useStore();

  return useMutation(async ({ email, password }: LoginArgs) => {
    const response = await axios.post(
      "https://jfe-test.devto.top/auth/sign-in",
      {
        email,
        password,
      }
    );

    const token = response.data.token;

    onAuthSuccess({
      email,
      token,
    });
  }, options);
};
