import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>loading....</div>;
  }

  if (isEmpty) {
    return <div>データなし</div>;
  }

  return (
    <ul>
      {data?.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/comments/${item.id}`}>{item.body}</Link>
          </li>
        );
      })}
    </ul>
  );
};
