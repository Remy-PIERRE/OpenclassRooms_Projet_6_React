import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles["container"]}>
      <Logo mainColor={false} />
      <p className={styles["text"]}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
