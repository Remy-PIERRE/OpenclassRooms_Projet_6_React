import styles from "./Host.module.css";

function Host({ name, picture }) {
  return (
    <div className={styles["container"]}>
      <p tabIndex="0">{name}</p>
      <img src={picture} alt={name} />
    </div>
  );
}

export default Host;
