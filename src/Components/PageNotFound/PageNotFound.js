import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <main className={styles["pageNotFound"]}>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link className={styles["link"]} to="/">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}
