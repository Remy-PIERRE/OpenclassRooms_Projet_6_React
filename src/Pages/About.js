import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Banner from "../Components/Banner";
import AboutColapseContainer from "../Components/Colapse/AboutColapseContainer";

function About() {
  /* get data from loader */
  const articles = useLoaderData();

  return (
    <>
      <Banner imageUrl={"kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg"} />
      <AboutColapseContainer articles={articles} />
    </>
  );
}

export default About;

/* fetch about.json from '/public' before rendering */
export const fetchArticles = async () => {
  try {
    const response = await axios.get("/data/about.json");
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
