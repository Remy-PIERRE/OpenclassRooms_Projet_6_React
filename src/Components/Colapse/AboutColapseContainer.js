import Colapse from "./Colapse";
import styles from "./AboutColapseContainer.module.css";

/* props.articles mandatory */
function AboutColapseContainer({ articles }) {
  return (
    <div className={styles["container"]}>
      {articles &&
        articles.map(({ title, text }) => (
          <Colapse key={title} title={title} text={text} />
        ))}
    </div>
  );
}

export default AboutColapseContainer;
