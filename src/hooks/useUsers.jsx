import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const useUsers = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  return { data, error };
};
