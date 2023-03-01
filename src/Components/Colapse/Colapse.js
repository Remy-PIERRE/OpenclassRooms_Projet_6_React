import styles from "./Colapse.module.css";

function Colapse({ title, text, list }) {
  return (
    <div className={styles["container"]}>
      <details className={styles["details"]}>
        <summary className={styles["title"]}>
          <h1 tabIndex="0">{title}</h1>
          <i className={`fa-solid fa-chevron-down`}></i>
        </summary>
        {text && <p tabIndex="0">{text}</p>}
        {list && (
          <ul>
            {list.map((listElement) => (
              <li key={listElement}>
                <p tabIndex="0">{listElement}</p>
              </li>
            ))}
          </ul>
        )}
      </details>
    </div>
  );
}

export default Colapse;
