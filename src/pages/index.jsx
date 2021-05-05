import Head from "next/head";
import styles from "src/styles/Home.module.css";

import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect } from "react";

export default function Home() {
  const hundleClick = useCallback((e) => {
    console.log(e.target);
    e.preventDefault();
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    console.log("mount");
    return () => {
      document.body.style.backgroundColor = "";
      console.log("unmount");
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
      </Head>

      <Header />

      <a href="/about" onClick={hundleClick}>
        ボタン
      </a>

      <Main page={"index"} />

      <Footer />
    </div>
  );
}
