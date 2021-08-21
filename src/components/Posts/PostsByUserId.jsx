import Link from "next/link";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const PostsByUserId = (props) => {
  const { data, error } = useSWR(
    props.id
      ? `https://jsonplaceholder.typicode.com/posts?userId=${props.id}`
      : null,
    fetcher
  );

  if (!data && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/posts/${item.id}`}>{item.title}</Link>;
          </li>
        );
      })}
    </ul>
  );
};
