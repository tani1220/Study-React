import styles from "src/components/Headline/Headline.module.css";

export const Headline = (props) => {
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>

      <p className={styles.description}>
        Get started by editing
        {props.children}
      </p>

      <button onClick={props.hundleReduce}>一つ減らす</button>
    </div>
  );
};
