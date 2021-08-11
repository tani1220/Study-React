import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";
import { useRouter } from "next/router";
import Head from "next/head";

export const Comment = () => {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.commentId
      ? `https://jsonplaceholder.typicode.com/comments/${router.query.commentId}`
      : null,
    fetcher
  );

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data) {
    return <div>...Loding</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <h1>{data?.email}</h1>
      <p>{data?.body}</p>
    </div>
  );
};
