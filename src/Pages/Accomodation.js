import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Carousel from "../Components/Carousel";
import AccomodationInfo from "../Components/AccomodationInfo/AccomodationInfo";
import AccomodationColapseContainer from "../Components/Colapse/AccomodationColapseContainer";

function Accomodation() {
  /* get data from loader */
  const annonce = useLoaderData();

  return (
    <>
      <Carousel pictures={annonce.pictures} alternate={annonce.title} />
      <AccomodationInfo annonce={annonce} />
      <AccomodationColapseContainer annonce={annonce} />
    </>
  );
}

export default Accomodation;

/* fetch annonces.json from '/public' then filter and get the one required before rendering */
export const fetchAnnonce = async ({ params }) => {
  const { id } = params;
  try {
    const response = await axios.get("/data/annonces.json");
    return response.data.find((annonce) => annonce.id === id);
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
