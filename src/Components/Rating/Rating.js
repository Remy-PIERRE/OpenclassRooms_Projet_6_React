import styles from "./Rating.module.css";

export default function Rating(props) {
  const maxRating = 5;
  const stars = [];
  for (let i = 0; i < maxRating; i++) {
    stars.push(
      <i
        className={`fa-sharp fa-solid fa-star ${
          props.rating > i && styles["active"]
        }`}
      ></i>
    );
  }

  return (
    <div className={styles["container"]}>
      {stars}
    </div>
  );
}
