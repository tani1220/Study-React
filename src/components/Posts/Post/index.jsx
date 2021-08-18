import Head from "next/head";
import { useRouter } from "next/router";
import { CommentsByPostId } from "src/components/Comments/CommentsByPostId";
import { UserByUserId } from "src/components/Users/User/UserByUserId";
import { usePost } from "src/hooks/usePost";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const Post = () => {
  const { data, error, isLoding } = usePost();

  if (isLoding) {
    <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>

      <UserByUserId userId={data.userId} />

      <CommentsByPostId id={data?.id} />
    </div>
  );
};
