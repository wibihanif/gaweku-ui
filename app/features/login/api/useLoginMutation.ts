import useAxiosInstance from "@/app/lib/axios";
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

  const { post } = useAxiosInstance();

  return useMutation(async ({ email, password }: LoginArgs) => {
    const response = await post("/auth/sign-in", {
      email,
      password,
    });

    const token = response.data.token;

    onAuthSuccess({
      email,
      token,
    });
  }, options);
};
