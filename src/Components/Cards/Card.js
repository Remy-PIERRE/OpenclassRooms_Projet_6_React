import Shell from "../Shell/Shell";
import styles from "./Card.module.css";

export default function CardsContainer(props) {
  const clickHandler = (event) => {
    console.log("click", event.target);
    console.log("click");
  };

  if (!props.data)
    return (
      <Shell size="small" className={styles["card"]}>
        <p>Titre de la location</p>
      </Shell>
    );

  return (
    <Shell size="small" className={styles["card"]} onClick={clickHandler}>
      <img src={props.data.cover} alt={props.data.title} onClick={clickHandler}/>
      <p>{props.data.title}</p>
    </Shell>
  );
}
