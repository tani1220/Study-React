import Head from "next/head";
import { PostsByUserId } from "src/components/Posts/PostsByUserId";
import { UserByUserId } from "src/components/Users/User/UserByUserId";
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

      <UserByUserId userId={data?.postId} />

      <PostsByUserId id={data?.postId} />
    </div>
  );
};
