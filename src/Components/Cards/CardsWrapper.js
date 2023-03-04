import ContainerWithBorderRadius from "../ComponentsLayouts/ContainerWithBorderRadius";
import Card from "./Card";
import styles from "./CardsWrapper.module.css";

/* props.data mandatory, props.maxRenderingCards optionnal */
function CardsWrapper({ data, maxRenderingCards = 50 }) {
  const max = (data.length < maxRenderingCards) ? data.length : maxRenderingCards;

  const annonceCards = () => {
    const cards = [];
    let i = 0;
    while (i < max) {
      cards.push(<Card key={i} data={Array.isArray(data) && data[i]} />);
      i++;
    }
    return cards;
  };

  return (
    <ContainerWithBorderRadius className={styles["container"]}>
      {annonceCards()}
    </ContainerWithBorderRadius>
  );
}

export default CardsWrapper;
