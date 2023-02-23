import { useState, useEffect } from "react";
import TopImage from "../TopImage/TopImage";
import CardsContainer from "../Cards/CardsContainer";
import PageLayout from "../PageLayout/PageLayout";

export default function Home(props) {
  const [annonces, setAnnonces] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/annonces.json")
      .then(async (response) => {
        if (response.ok) {
          // localStorage.setItem("annonces", response);
          return response.json();
        }
        throw response;
      })
      .then((response) => {
        setAnnonces(response);
        localStorage.setItem("annonces", JSON.stringify(response));
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  // useEffect(() => {
  //   const text = JSON.parse(localStorage.getItem('annonces'));
  //   setTimeout(() => {
  //     console.log('storage', text)
  //   }, 3000)
  // }, [])

  return (
    <PageLayout>
      <TopImage
        imageUrl="eric-muhr-P_XxsdVgtpQ-unsplash.jpg"
        text="Chez vous, partout et ailleurs"
      />
      {loading && <CardsContainer data={"loading"} />}
      {!loading && <CardsContainer data={annonces} />}
    </PageLayout>
  );
}
