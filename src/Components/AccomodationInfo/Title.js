import styles from "./Title.module.css";

/* props.title, props.location mandatory */
function Title({ title, location }) {
  return (
    <div className={styles["container"]}>
      <h1 tabIndex="0">{title}</h1>
      <p tabIndex="0">{location}</p>
    </div>
  );
}

export default Title;
