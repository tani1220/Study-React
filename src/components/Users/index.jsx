import Link from "next/link";
import { useUsers } from "src/hooks/useFetchArray";

export const Users = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isEmpty) {
    return <div>データなし</div>;
  }

  return (
    <ul>
      {data?.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`user/${item.id}`}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
