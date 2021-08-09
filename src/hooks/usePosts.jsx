import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const usePosts = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return {
    data,
    error,
    isLoding: !error && !data,
    isEmpty: data && data.length === 0,
  };
};
