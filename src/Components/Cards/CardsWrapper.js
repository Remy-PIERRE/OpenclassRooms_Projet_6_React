import ContainerWithBorderRadius from "../ComponentsLayouts/ContainerWithBorderRadius";
import Card from "./Card";
import styles from "./CardsWrapper.module.css";

function CardsWrapper({
  data,
  maxRenderingCards = 9,
  maxLoadingRenderingCards = 5,
}) {
  const annonceCards = () => {
    const cards = [];
    const maxCards = data ? maxRenderingCards : maxLoadingRenderingCards;
    let i = 0;
    while (i < maxCards) {
      cards.push(
        <Card
          key={i}
          id={data && data[i].id}
          cover={data && data[i].cover}
          title={(data && data[i].title) || "Titre de la location"}
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
