import ContainerWithBorderRadius from "../ComponentsLayouts/ContainerWithBorderRadius";
import styles from "./Banner.module.css";

function Banner({ imageUrl, text }) {
  return (
    <ContainerWithBorderRadius className={styles["container"]}>
      <img
        className={styles["img"]}
        src={`/images/${imageUrl}`}
        alt="#"
      />
      {text && <h1 className={styles["text"]}>{text}</h1>}
    </ContainerWithBorderRadius>
  );
}

export default Banner;
