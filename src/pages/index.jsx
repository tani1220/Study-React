import Head from "next/head";
import styles from "src/styles/Home.module.css";

import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setcount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const hundleClick = useCallback(() => {
    if (count < 10) {
      setcount((count) => count + 1);
    }
  }, [count]);

  const hundleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内だよ");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const hundleCount = useCallback(() => {
    setIsShow((isShow) => !isShow);
  });

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
      </Head>

      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={hundleClick}>ボタン</button>
      <button onClick={hundleCount}>{isShow ? "非表示" : "表示"}</button>

      <input type="text" value={text} onChange={hundleChange} />

      <Main page={"index"} />

      <Footer />
    </div>
  );
}
