import { useState } from "react";

import Shell from "../Shell/Shell";

import styles from "./Carousel.module.css";

export default function Carrousel(props) {
const [counter, setCounter] = useState('1/1');

  return (
    <Shell className={styles["carousel"]}>
      <img src={props.pictures[0]} alt={props.alternate} />
      <div className={styles["buttons"]}>
        <button>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className={styles['counter']}>
        <p>{counter}</p>
      </div>
    </Shell>
  );
}
