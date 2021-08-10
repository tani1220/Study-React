import Head from "next/head";

import { Header } from "src/components/Header";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Index page</title>
      </Head>
      <Header />
      <h1>React Study</h1>
      <p>JsonPlaceholderのAPIを叩く</p>
    </div>
  );
};

export default Index;
