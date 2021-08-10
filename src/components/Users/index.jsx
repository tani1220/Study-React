import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const Users = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data) {
    return <div>loding...</div>;
  }

  return (
    <ul>
      {data?.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
};
