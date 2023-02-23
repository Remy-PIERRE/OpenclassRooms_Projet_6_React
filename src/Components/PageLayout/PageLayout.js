import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "./PageLayout.module.css";

export default function PageLayout(props) {
  const classes = `${styles["main"]} ${props.className}`;

  return (
    <div className={styles["container"]}>
      <Header />
      <main className={classes}>{props.children}</main>
      {!props.hasNoFooter && <Footer />}
    </div>
  );
}
