import Shell from "../Shell/Shell";
import styles from "./TopImage.module.css";

export default function TopImage(props) {
  return (
    <Shell className={styles["container"]} size="big">
      <img
        className={styles["img"]}
        src={`/images/${props.imageUrl}`}
        alt="#"
      />
      {props.text && <h1 className={styles["h1"]}>{props.text}</h1>}
    </Shell>
  );
}
