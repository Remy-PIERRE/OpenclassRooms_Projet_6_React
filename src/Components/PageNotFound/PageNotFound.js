import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";
import PageLayout from "../PageLayout/PageLayout";

export default function PageNotFound() {
  return (
    <PageLayout hasNoFooter={true} className={styles["pageNotFound"]}>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link className={styles["link"]} to="/">
        Retourner sur la page d’accueil
      </Link>
    </PageLayout>
  );
}
