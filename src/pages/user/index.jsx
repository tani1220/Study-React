import Head from "next/head";
import { Header } from "src/components/Header";
import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

const User = () => {
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
    <div>
      <Head>
        <title>User page</title>
      </Head>

      <Header />

      <ul>
        {data?.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default User;
