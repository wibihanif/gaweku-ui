import useAxiosInstance from "@/app/lib/axios";
import { useStore } from "@/app/stores";
import { UseMutationOptions, useMutation } from "react-query";

interface DeleteToDoArgs {
  toDoId: string;
}

export const useDeleteToDoMutation = (
  options?: UseMutationOptions<void, unknown, DeleteToDoArgs>
) => {
  const { token } = useStore();
  const axiosInstance = useAxiosInstance();

  return useMutation(async ({ toDoId }: DeleteToDoArgs) => {
    const url = `/todos/${toDoId}`;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    await axiosInstance.delete(url, config);
  }, options);
};
