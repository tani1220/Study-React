import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const Comments = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data) {
    return <div>Loding....</div>;
  }

  return (
    <ul>
      {data?.map((item) => {
        return <li key={item.id}>{item.body}</li>;
      })}
    </ul>
  );
};
