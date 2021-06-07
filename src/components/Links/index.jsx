import styles from "src/components/Links/Links.module.css";

export const Links = (props) => {
  return (
    <div className={styles.grid}>
      {props.items.map((items) => {
        return (
          <a key={items.href} href={items.href} className={styles.card}>
            <h3>{items.title}</h3>
            <p>{items.discription}</p>
          </a>
        );
      })}
    </div>
  );
};
