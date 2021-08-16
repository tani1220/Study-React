import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const useComment = () => {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.commentId
      ? `https://jsonplaceholder.typicode.com/comments/${router.query.commentId}`
      : null,
    fetcher
  );

  return { data, error, isLoding: !data && !error };
};
