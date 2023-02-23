import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function CardsContainer(props) {
  if (!props.data)
    return (
      <div className={`${styles["card"]} ${styles["gradient"]}`}>
        <p>Titre de la location</p>
      </div>
    );

  return (
    <div className={styles["container"]}>
      <Link className={styles["card"]} to={'/location'} state={{ id: props.data.id}}>
        <img src={props.data.cover} alt={props.data.title} />
        <p>{props.data.title}</p>
      </Link>
    </div>
  );
}
