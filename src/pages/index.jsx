import Head from "next/head";
import styles from "src/styles/Home.module.css";

import { Header } from "src/components/Header";

const Index = () => {
  return (
    <div className={styles.container}>
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
