import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Banner from "../Components/Banner";
import CardsWrapper from "../Components/Cards/CardsWrapper";

function Home() {
  /* get data from loader */
  const annonces = useLoaderData("annonces");

  return (
    <>
      <Banner
        imageUrl={"eric-muhr-P_XxsdVgtpQ-unsplash.jpg"}
        text={"Chez vous, partout et ailleurs"}
      />
      <CardsWrapper data={annonces} />
    </>
  );
}

export default Home;

/* fetch annonces.json from '/public' before rendering */
export const fetchAnnonces = async () => {
  try {
    const response = await axios.get("/data/annonces.json");
    return response.data;
  } catch (error) {
    /* custom message use in '/Pages/Error.js' */
    const status = error.response.status;
    let message = "Oups! La page que vous demandez n'existe pas.";
    if (status >= 500) {
      message = "Oups! Le serveur ne répond pas.";
    }
    throw {
      message,
      status,
    };
  }
};
