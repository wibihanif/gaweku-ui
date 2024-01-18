import useAxiosInstance from "@/app/lib/axios";
import { useStore } from "@/app/stores";
import { UseMutationOptions, useMutation } from "react-query";

interface CreateToDoArgs {
  name: string;
  is_completed: boolean;
}

export const useCreateToDoMutation = (
  options?: UseMutationOptions<void, unknown, CreateToDoArgs>
) => {
  const { token } = useStore();

  const { post } = useAxiosInstance();

  return useMutation(async ({ is_completed, name }: CreateToDoArgs) => {
    await post(
      "/todos",
      {
        is_completed,
        name,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }, options);
};
