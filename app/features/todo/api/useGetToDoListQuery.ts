import useAxiosInstance from "@/app/lib/axios";
import { useStore } from "@/app/stores";
import { UseQueryOptions, useQuery } from "react-query";

interface ToDoResponse {
  data: {
    id: string;
    user_id: string;
    name: string;
    is_completed: boolean;
  }[];
}

export const useGetToDoList = (
  options?: UseQueryOptions<unknown, unknown, ToDoResponse, any>
) => {
  const { token } = useStore();

  const { get } = useAxiosInstance();

  return useQuery(
    ["todos"],
    async () => {
      const todos = await get("/todos", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return todos;
    },
    options
  );
};
