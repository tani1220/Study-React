import Head from "next/head";
import styles from "src/styles/Home.module.css";

import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightblue } from "src/hooks/useBgLightblue";

export default function About() {
  const { count, isShow, hundleClick, hundleCount } = useCounter();
  const { text, array, hundleChange, hundleAdd } = useInputArray();
  useBgLightblue();

  return (
    <div className={styles.container}>
      <Head>
        <title>about page</title>
      </Head>
      <Header />

      <input type="text" value={text} onChange={hundleChange} />
      <button onClick={hundleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={hundleClick}>ボタン</button>
      <button onClick={hundleCount}>{isShow ? "非表示" : "表示"}</button>

      <Main page={"about"} />
      <Footer />
    </div>
  );
}
