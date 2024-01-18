import useAxiosInstance from "@/app/lib/axios";
import { useStore } from "@/app/stores";
import { UseMutationOptions, useMutation } from "react-query";

interface UpdateToDoArgs {
  name: string;
  is_completed: boolean;
  id: string;
}

export const useUpdateToDoMutation = (
  options?: UseMutationOptions<void, unknown, UpdateToDoArgs>
) => {
  const { token } = useStore();

  const { put } = useAxiosInstance();

  return useMutation(async ({ is_completed, name, id }: UpdateToDoArgs) => {
    await put(
      `/todos/${id}`,
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
