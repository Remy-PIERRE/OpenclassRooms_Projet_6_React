import { useParams, useLoaderData, json } from "react-router-dom";
import axios from "axios";
import Carousel from "../Components/Carousel/Carousel";
import AccomodationInfo from "../Components/AccomodationInfo/AccomodationInfo";
import FoldableArticleContainer from "../Components/FoldableArticle/AccomodationFoldableArticleContainer";

function Accomodation() {
  const { id } = useParams();
  const annonce = useLoaderData();

  return (
    <>
      <Carousel pictures={annonce.pictures} alternate={annonce.title} />
      <AccomodationInfo annonce={annonce} />

      <FoldableArticleContainer annonce={annonce} />
    </>
  );
}

export default Accomodation;

export const fetchAnnonce = async ({ params }) => {
  const { id } = params;
  try {
    const response = await axios.get("/data/annonces.json");
    return response.data.find((annonce) => annonce.id === id);
  } catch (error) {
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
