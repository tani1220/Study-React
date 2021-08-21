import Head from "next/head";
import { CommentsByPostId } from "src/components/Comments/CommentsByPostId";
import { PostsByUserId } from "src/components/Posts/PostsByUserId";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { data, error, isLoding } = useUser();
  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoding) {
    return <div>Loding...</div>;
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
