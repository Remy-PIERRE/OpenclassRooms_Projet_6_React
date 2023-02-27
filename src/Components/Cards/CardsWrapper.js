import ContainerWithBorderRadius from "../ComponentsLayouts/ContainerWithBorderRadius";
import Card from "./Card";
import styles from "./CardsWrapper.module.css";

function CardsWrapper({
  data,
  maxRenderingCards = 9,
  maxLoadingRenderingCards = 6,
}) {
  const annonceCards = () => {
    const cards = [];
    const maxCards = Array.isArray(data) ? maxRenderingCards : maxLoadingRenderingCards;
    let i = 0;
    while (i < maxCards) {
      cards.push(
        <Card
          key={i}
          data={Array.isArray(data) && data[i]}
        />
      );
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
