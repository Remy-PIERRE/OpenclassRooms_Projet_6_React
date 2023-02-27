import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import CardsWrapper from "../Components/Cards/CardsWrapper";

function Home() {
  const annonces = useLoaderData('annonces');

  return (
    <>
      <Banner
        imageUrl={"eric-muhr-P_XxsdVgtpQ-unsplash.jpg"}
        text={"Chez vous, partout et ailleurs"}
      />
      {/* {annonces.isError && <p>{annonces.message}</p>} */}
      <CardsWrapper data={annonces} />
    </>
  );
}

export default Home;

export const fetchAnnonces = async ({request, params}) => {
  let response = await fetch("/data/annonces.json");
  if (!response.ok)
    throw {
      message: "Oups! Le serveur ne répond pas.",
      status: "500",
    };
  return response;
};
