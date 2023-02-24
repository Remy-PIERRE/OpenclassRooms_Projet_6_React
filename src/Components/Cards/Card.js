import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Cards({ id, cover, title }) {
  if (id)
    return (
      <div className={styles["container"]}>
        <Link className={styles["card"]} to={`/location/:${id}`}>
          <img src={cover} alt={title} className={styles["img"]} />
          <p className={styles["title"]}>{title}</p>
        </Link>
      </div>
    );

  return (
    <div className={styles["container"]}>
      <div className={`${styles["card"]} ${styles["gradient"]}`}>
        <p className={styles["title"]}>{title}</p>
      </div>
    </div>
  );
}

export default Cards;
