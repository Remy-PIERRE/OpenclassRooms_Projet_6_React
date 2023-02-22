import { useState, useEffect } from "react";
import TopImage from "../TopImage/TopImage";
import CardsContainer from "../Cards/CardsContainer";

export default function Home(props) {
  const [annonces, setAnnonces] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!annonces) {
      fetch("/annonces.json")
        .then(async (response) => {
          if (response.ok) return response.json();
          throw response;
        })
        .then((reponse) => {
          setAnnonces(reponse);
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <main>
      <TopImage
        imageUrl="eric-muhr-P_XxsdVgtpQ-unsplash.jpg"
        text="Chez vous, partout et ailleurs"
      />
      {loading && <CardsContainer data={'loading'} />}
      {!loading && <CardsContainer data={annonces} />}
    </main>
  );
}
