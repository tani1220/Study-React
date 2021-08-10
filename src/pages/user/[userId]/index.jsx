import Head from "next/head";
import { Header } from "src/components/Header";

const userId = () => {
  return (
    <div>
      <Head>
        <title>user Page</title>
      </Head>
      <Header />
    </div>
  );
};

export default userId;
