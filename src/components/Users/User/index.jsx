import Head from "next/head";
import { CommentsByPostId } from "src/components/Comments/CommentsByPostId";
import { PostsByUserId } from "src/components/Posts/PostsByUserId";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { data, error, isLoading } = useUser();
  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <h1>{data?.username}</h1>
      <p>{data?.email}</p>

      <h2>記事</h2>
      <PostsByUserId id={data.id} />

      <h2>コメント</h2>
      <CommentsByPostId id={data.id} />
    </div>
  );
};
