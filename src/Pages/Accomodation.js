import { useParams, useLoaderData, json } from "react-router-dom";
import Carousel from "../Components/Carousel/Carousel";
import AccomodationInfo from "../Components/AccomodationInfo/AccomodationInfo";
import FoldableArticleContainer from "../Components/FoldableArticle/AccomodationFoldableArticleContainer";

function Accomodation() {
  const { id } = useParams();
  // const annonces = useLoaderData();
  const annonce = useLoaderData();
  // const annonce = annonces.find((annonce) => annonce.id === id);

  return (
    <>
      <Carousel pictures={annonce.pictures} alternate={annonce.title} />
      <AccomodationInfo annonce={annonce} />

      <FoldableArticleContainer annonce={annonce} />
    </>
  );
}

export default Accomodation;

export const fetchAnnonce = async ({ request, params }) => {
  try {
    const { id } = params;
    let response = await fetch("/data/annonces.json");
    if (!response.ok)
      throw {
        message: "Oups! Le serveur ne répond pas.",
        status: "500",
      };
    response = await response.json();
    if (response.find((annonce) => annonce.id === id).length === 0)
      throw {
        message: "Oups! La page que vous demandez n'existe pas.",
        status: "404",
      };
    return response.find((annonce) => annonce.id === id);
  } catch (error) {
    console.log("catch");
    throw {
      message: "Oups! La page que vous demandez n'existe pas.",
      status: "404",
    };
  }
};
