import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const useUser = () => {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.userId
      ? `https://jsonplaceholder.typicode.com/users/${router.query.userId}`
      : null,
    fetcher
  );

  return { data, error, isLoading: !data && !error };
};
