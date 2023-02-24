import { Link } from "react-router-dom";
import NoFooterPageLayout from "./PagesLayouts/NoFooterPageLayout";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <NoFooterPageLayout>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>404</h1>
        <p className={styles["text"]}>
          Oups! La page que vous demandez n'existe pas.
        </p>

        <Link className={styles["link"]} to="/">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </NoFooterPageLayout>
  );
}

export default PageNotFound;
