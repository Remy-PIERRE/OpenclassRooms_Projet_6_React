import styles from "./Host.module.css";

/* props.name, props.picture mandatory */
function Host({ name, picture }) {
  return (
    <div className={styles["container"]}>
      <p tabIndex="0">{name}</p>
      <img src={picture} alt={name} />
    </div>
  );
}

export default Host;
