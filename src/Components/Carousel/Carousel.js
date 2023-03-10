import { useState, useEffect } from "react";
import useWindowWidth from "../../hook/useWindowWidth";
import ContainerWithBorderRadius from "../ComponentsLayouts/ContainerWithBorderRadius";
import styles from "./Carousel.module.css";

/* props.pictures mandatory, props.alternate optionnal */
export default function Carrousel({ pictures, alternate = "#" }) {
  const totalPicturesConter = pictures.length;
  const [actualPictureConter, setActualPictureCounter] = useState(0);
  /* get window.innerWidth => if < 768px no counter displayed */
  const width = useWindowWidth();

  /* next picture with timer, auto-clean on picture change */
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setActualPictureCounter((prevState) => {
        return prevState === totalPicturesConter - 1 ? 0 : prevState + 1;
      });
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [actualPictureConter]);

  /*render prev pricture */
  const prevPictureHandler = () => {
    setActualPictureCounter((prevState) => {
      return prevState === 0 ? totalPicturesConter - 1 : prevState - 1;
    });
  };
  /* render next picture */
  const nextPictureHandler = () => {
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
      {totalPicturesConter > 1 && width > 768 && (
        <div className={styles["counter"]}>
          <span>{`${actualPictureConter + 1}/${totalPicturesConter}`}</span>
        </div>
      )}
    </ContainerWithBorderRadius>
  );
}
