import Card from "./Card";

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
    <div className="md:p-[3rem] grid grid-cols-1 md:grid-cols-3 md:bg-bgGrey rounded-[1rem] md:rounded-[2rem]">
      {annonceCards()}
    </div>
  );
}

export default CardsWrapper;
