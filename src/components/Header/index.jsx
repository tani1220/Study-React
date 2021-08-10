import Link from "next/link";
import styles from "src/components/Header/Header.module.css";

const NAV_ITEMS = [
  { href: "/posts", label: "Posts" },
  { href: "/", label: "About" },
  { href: "/user", label: "User" },
  { href: "/comments", label: "Comments" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <a>{item.label}</a>
          </Link>
        );
      })}
    </header>
  );
};
