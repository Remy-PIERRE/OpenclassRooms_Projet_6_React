import { useState } from "react";

import styles from "./FoldableArticle.module.css";

export default function FoldableArticle(props) {
  const [opened, setOpened] = useState(false);

  const clickHandler = () => {
    setOpened((prevState) => {
      return prevState ? false : true;
    });
  };

  return (
    <div className={`${styles["container"]} ${props.className}`}>
      <h2 onClick={clickHandler}>{props.title}</h2>
      {opened && props.text && <p>{props.text}</p>}
      {opened && props.list && (
        <ul>
          {props.list.map((elem) => (
            <li>
              <p>{elem}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
