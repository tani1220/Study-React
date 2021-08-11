import Link from "next/link";
import { useComments } from "src/hooks/useComments";

export const Comments = () => {
  const { data, error } = useComments();

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data) {
    return <div>Loding....</div>;
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
