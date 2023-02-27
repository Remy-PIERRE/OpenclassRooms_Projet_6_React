import styles from "./Rating.module.css";

function Rating({ rating, maxRating = 5 }) {
  const stars = [];
  let index = 0;
  while (index < +maxRating) {
    stars.push(
      <i
        className={`fa-sharp fa-solid fa-star ${
          rating > index && styles["active"]
        }`}
        key={index}
      ></i>
    );
    index++;
  }
  return (
    <div className={styles["container"]} tabIndex="0">
      {stars}
    </div>
  );
}

export default Rating;
