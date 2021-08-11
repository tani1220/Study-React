import Head from "next/head";
import { useRouter } from "next/router";
import { Header } from "src/components/Header";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

const Comments = () => {
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
        <title>Comments Page</title>
      </Head>
      <Header />

      <h1>{data?.name}</h1>
      <p>{data?.email}</p>
    </div>
  );
};

export default Comments;
