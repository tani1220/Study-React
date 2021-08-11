import Link from "next/link";
import { useUsers } from "src/hooks/useUsers";

export const Users = () => {
  const { data, error } = useUsers();

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data) {
    return <div>loding...</div>;
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
