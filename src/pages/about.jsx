import Head from "next/head";
import styles from "src/styles/Home.module.css";

import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

export default function About({
  doubleCount,
  isShow,
  hundleClick,
  hundleCount,
  text,
  array,
  hundleChange,
  hundleAdd,
}) {
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

      {isShow ? <h1>{doubleCount}</h1> : null}
      <button onClick={hundleClick}>ボタン</button>
      <button onClick={hundleCount}>{isShow ? "非表示" : "表示"}</button>

      <Main page={"about"} />
      <Footer />
    </div>
  );
}
