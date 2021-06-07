import Head from "next/head";
import styles from "src/styles/Home.module.css";

import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const About = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>about page</title>
      </Head>
      <Header />

      <input type="text" value={props.text} onChange={props.hundleChange} />
      <button onClick={props.hundleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      {props.isShow ? <h1>{props.doubleCount}</h1> : null}
      <button onClick={props.hundleClick}>ボタン</button>
      <button onClick={props.hundleCount}>
        {props.isShow ? "非表示" : "表示"}
      </button>

      <Main page={"about"} />
      <Footer />
    </div>
  );
};

export default About;
