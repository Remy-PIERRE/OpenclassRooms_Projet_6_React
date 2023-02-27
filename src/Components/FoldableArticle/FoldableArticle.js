import { useState } from "react";
import styles from "./FoldableArticle.module.css";

function FoldableArticle({ title, text, list }) {
  const [opened, setOpened] = useState(false);

  const clickHandler = () => {
    setOpened((prevState) => {
      return prevState ? false : true;
    });
  };
  const keyDownHandler = (event) => {
    event.key === "Enter" && clickHandler();
  };

  return (
    <div className={styles["container"]}>
      <div
        className={styles["title"]}
        onClick={clickHandler}
        onKeyDown={keyDownHandler}
      >
        <h1 tabIndex="0">{title}</h1>
        <i
          className={`fa-solid fa-chevron-down ${
            opened && styles["iconReverse"]
          }`}
        ></i>
      </div>
      {opened && text && <p className={opened && styles['textOpening']} tabIndex="0">{text}</p>}
      {opened && list && (
        <ul>
          {list.map((listElement) => (
            <li key={listElement}>
              <p tabIndex="0">{listElement}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FoldableArticle;
