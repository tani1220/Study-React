import Head from "next/head";
import styles from "src/styles/Home.module.css";

import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [foo, setFoo] = useState(1);

  const hundleClick = useCallback(() => {
    if (foo < 10) {
      setFoo((foo) => foo + 1);
    }
  }, [foo]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [foo]);

  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
      </Head>

      <Header />
      <h1>{foo}</h1>
      <button onClick={hundleClick}>ボタン</button>

      <Main page={"index"} />

      <Footer />
    </div>
  );
}
