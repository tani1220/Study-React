import Head from "next/head";
import { usePost } from "src/hooks/usePost";

export const Post = () => {
  const { post, user, error, isLoding } = usePost();

  if (isLoding) {
    return <div>loding now ...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>

      {user?.name ? <h2>作成者名 - {user.name}</h2> : null}
    </div>
  );
};
