import Link from "next/link";
import { useComments } from "src/hooks/useFetchArray";

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments();

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
            <Link href={`comments/${item.id}`}>{item.body}</Link>
          </li>
        );
      })}
    </ul>
  );
};
