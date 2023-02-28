import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import styles from "./Error.module.css";

function ErrorLayout() {
  const message = "Oups! La page que vous demandez n'existe pas!!!!!"
  const error = useRouteError()
  return (
    <>
      <Header />
      <main className={styles["container"]}>
        <h1 className={styles["title"]}>{error.status || '404'}</h1>
        <p className={styles["text"]}>
          {!error.status && message || error.message}
        </p>

        <Link className={styles["link"]} to="/">
          Retourner sur la page d’accueil
        </Link>
      </main>
    </>
  );
}

export default ErrorLayout;
