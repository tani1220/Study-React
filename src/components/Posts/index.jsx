import Link from "next/link";
import { usePosts } from "src/hooks/useFetchArray";

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();
  if (isLoading) {
    return <div>loading now ...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空</div>;
  }

  return (
    <ol>
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`posts/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </ol>
  );
};
