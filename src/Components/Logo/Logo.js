import styles from "./Logo.module.css";

function Logo({ mainColor }) {
  const logo = ["logoK", "logoHouse", "logoS", "logoA"];

  return (
    <div className={styles["container"]}>
      {logo.map((letter) => (
        <span
          key={letter}
          className={`${styles["logoElem"]} ${styles[letter]} ${
            mainColor && styles["mainColor"]
          }`}
        />
      ))}
    </div>
  );
}

export default Logo;
