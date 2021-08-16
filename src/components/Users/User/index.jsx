import Head from "next/head";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { data, error, isLoding } = useUser();
  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoding) {
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
