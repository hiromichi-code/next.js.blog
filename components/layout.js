import styles from "./layout.module.scss";

export default function Layout({ Children }) {
  return <div className={styles.container}>{Children}</div>;
}
