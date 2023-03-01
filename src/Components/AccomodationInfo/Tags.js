import styles from "./Tags.module.css";

/* props.tags mandatory */
function Tags({ tags }) {
  return (
    <div className={styles["container"]}>
      {tags.map((tag) => (
        <span className={styles["tag"]} key={tag} tabIndex="0">
          <p>{tag}</p>
        </span>
      ))}
    </div>
  );
}

export default Tags;
