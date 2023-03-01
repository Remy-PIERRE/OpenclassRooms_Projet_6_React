import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className={styles["container"]}>
      <Logo mainColor={false} />
      <p className={styles["text"]}>© {date} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
