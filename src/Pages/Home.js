import { useState, useEffect } from "react";
import NormalPageLayout from "./PagesLayouts/NormalPageLayout";
import Banner from "../Components/Banner/Banner";
import CardsWrapper from "../Components/Cards/CardsWrapper";

function Home() {
  const [annonces, setAnnonces] = useState(false);

  useEffect(() => {
    if (annonces) return;
    fetch("/data/annonces.json")
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((data) => {
        setAnnonces(data);
      })
      .catch((error) => console.log("error fetching annonces.json", error));
  }, []);

  return (
    <NormalPageLayout>
      <Banner
        imageUrl={"eric-muhr-P_XxsdVgtpQ-unsplash.jpg"}
        text={"Chez vous, partout et ailleurs"}
      />
      <CardsWrapper data={annonces} />
    </NormalPageLayout>
  );
}

export default Home;
