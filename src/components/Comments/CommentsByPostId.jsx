import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const { data, error, isLoding, isEmpty } = useCommentsByPostId(props.id);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoding) {
    return <div>Loding....</div>;
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
