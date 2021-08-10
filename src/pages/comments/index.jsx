import Head from "next/head";
import { Header } from "src/components/Header";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

const Comments = () => {
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
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>

      <Header />
      <ul>
        {data?.map((item) => {
          return <li key={item.id}>{item.body}</li>;
        })}
      </ul>
    </div>
  );
};

export default Comments;
