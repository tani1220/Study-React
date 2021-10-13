import Head from "next/head";
import { PostsByUserId } from "src/components/Posts/PostsByUserId";
import { UserByUserId } from "src/components/Users/User/UserByUserId";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { data, error, isLoading } = useComment();
  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>...loading</div>;
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
