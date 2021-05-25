import styles from "src/components/Main/Main.module.css";

import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";

import { useCallback, useState } from "react";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation \u2192",
    discription: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn →",
    discription: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://github.com/vercel/next.js/tree/master/examples",
    title: "Examples →",
    discription: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href:
      "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy →",
    discription:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export function Main(props) {
  const [items, setItems] = useState(ITEMS);

  const hundleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);
  return (
    <main className={styles.main}>
      <Headline page={props.page} hundleReduce={hundleReduce}>
        {<code className={styles.code}>pages/{props.page}</code>}
      </Headline>
      <p>
        現在のアイテムの数は
        {<code className={styles.code}>{items.length}</code>}
      </p>
      <Links items={items} hundleReduce={hundleReduce} />
    </main>
  );
}
