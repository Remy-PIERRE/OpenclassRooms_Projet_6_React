import { useState } from "react";
import ContainerWithBorderRadius from "../ComponentsLayouts/ContainerWithBorderRadius";
import styles from "./Carousel.module.css";

/* props.pictures mandatory, props.alternate optionnal */
export default function Carrousel({ pictures, alternate = "#" }) {
  const totalPicturesConter = pictures.length;
  const [actualPictureConter, setActualPictureCounter] = useState(0);

  /* auto changing picture to next, need to clear it each re-rendering */
  const intervalTimer = setTimeout(() => {
    setActualPictureCounter((prevState) => {
      return prevState === totalPicturesConter - 1 ? 0 : prevState + 1;
    });
  }, 5000);

  /*render prev pricture */
  const prevPictureHandler = () => {
    clearInterval(intervalTimer);
    setActualPictureCounter((prevState) => {
      return prevState === 0 ? totalPicturesConter - 1 : prevState - 1;
    });
  };
  /* render next picture */
  const nextPictureHandler = () => {
    clearInterval(intervalTimer);
    setActualPictureCounter((prevState) => {
      return prevState === totalPicturesConter - 1 ? 0 : prevState + 1;
    });
  };

  return (
    <ContainerWithBorderRadius className={styles["container"]}>
      <img src={pictures[actualPictureConter]} alt={alternate} />
      {totalPicturesConter > 1 && (
        <div className={styles["buttons"]}>
          <button onClick={prevPictureHandler}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={nextPictureHandler}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}
      {totalPicturesConter > 1 && (
        <div className={styles["counter"]}>
          <span>{`${actualPictureConter + 1}/${totalPicturesConter}`}</span>
        </div>
      )}
    </ContainerWithBorderRadius>
  );
}
