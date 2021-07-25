import { usePosts } from "src/hooks/usePosts";

export const Posts = () => {
  const { data, error, isLoding, isEmpty } = usePosts();
  if (isLoding) {
    return <div>loding now ...</div>;
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
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
