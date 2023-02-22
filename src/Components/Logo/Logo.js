import styles from "./Logo.module.css";

export default function Logo(props) {
  return (
    <div className={styles["logo"]}>
      <div
        className={`${styles["kLetter"]} ${
          props.mainColor && styles["mainColor"]
        }`}
      />
      <div
        className={`${styles["houseIcon"]} ${
          props.mainColor && styles["mainColor"]
        }`}
      />
      <div
        className={`${styles["sLetter"]} ${
          props.mainColor && styles["mainColor"]
        }`}
      />
      <div
        className={`${styles["aLetter"]} ${
          props.mainColor && styles["mainColor"]
        }`}
      />
    </div>
  );
}
