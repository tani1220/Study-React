import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";
import { useRouter } from "next/router";
import Head from "next/head";

export const User = () => {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.userId
      ? `https://jsonplaceholder.typicode.com/users/${router.query.userId}`
      : null,
    fetcher
  );

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data) {
    return <div>Loding...</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <h1>{data?.username}</h1>
      <p>{data?.email}</p>
    </div>
  );
};
