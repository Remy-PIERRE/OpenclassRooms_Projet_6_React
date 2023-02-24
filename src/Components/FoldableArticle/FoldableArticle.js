import { useState } from "react";
import styles from "./FoldableArticle.module.css";

function FoldableArticle({ title, text, list }) {
  const [opened, setOpened] = useState(false);

  const clickHandler = () => {
    setOpened((prevState) => {
      return prevState ? false : true;
    });
  };

  return (
    <div className={styles["container"]}>
      <h1 onClick={clickHandler}>{title}</h1>
      {opened && text && <p>{text}</p>}
      {opened && list && (
        <ul>
          {list.map((elem) => (
            <li>
              <p>{elem}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FoldableArticle;
