import Shell from "../Shell/Shell";
import Card from "./Card";

import styles from "./CardsContainer.module.css";

export default function CardsContainer(props) {
  if (props.data === "loading") {
    return (
      <Shell size="big" className={styles["container"]}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Shell>
    );
  }

  return (
    <Shell className={styles["container"]}>
      {props.data.map((annonce) => (
        <Card data={annonce} key={annonce.id} />
      ))}
    </Shell>
  );
}
