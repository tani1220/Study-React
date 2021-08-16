import Head from "next/head";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { data, error, isLoding } = useComment();
  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoding) {
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
