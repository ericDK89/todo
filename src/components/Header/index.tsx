import logoImg from "../../assets/images/logo.svg";
import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.todoHeader}>
      <img src={logoImg} alt="Todo" />
    </header>
  );
}
