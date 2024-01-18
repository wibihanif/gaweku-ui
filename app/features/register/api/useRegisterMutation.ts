import useAxiosInstance from "@/app/lib/axios";
import { UseMutationOptions, useMutation } from "react-query";

interface RegisterArgs {
  email: string;
  password: string;
  confirm_password: string;
}

export const useRegisterMutation = (
  options?: UseMutationOptions<void, unknown, RegisterArgs>
) => {
  const { post } = useAxiosInstance();

  return useMutation(
    async ({ email, password, confirm_password }: RegisterArgs) => {
      await post("/auth/sign-up", {
        email,
        password,
        confirm_password,
      });
    },
    options
  );
};
