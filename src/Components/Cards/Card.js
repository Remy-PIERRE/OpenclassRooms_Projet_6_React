import { Link } from "react-router-dom";
import styles from "./Card.module.css";

// function Cards({ id, cover, title }) {
function Cards({ data }) {
  if (data)
    return (
      <div className={styles["container"]}>
        <Link
          className={styles["card"]}
          to={`accomodation/${data.id}`}
        >
          <img src={data.cover} alt={data.title} className={styles["img"]} />
          <p className={styles["title"]}>{data.title}</p>
        </Link>
      </div>
    );

  return (
    <div className={styles["container"]}>
      <div className={`${styles["card"]} ${styles["gradient"]}`}>
        <p className={styles["title"]}>Titre de la location</p>
      </div>
    </div>
  );
}

export default Cards;
