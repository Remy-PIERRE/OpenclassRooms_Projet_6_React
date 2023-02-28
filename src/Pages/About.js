import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Banner from "../Components/Banner/Banner";
import AboutFoldableArticleContainer from "../Components/FoldableArticle/AboutFoldableArticleContainer";

function About() {
  const articles = useLoaderData();

  return (
    <>
      <Banner imageUrl={"kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg"} />
      <AboutFoldableArticleContainer articles={articles} />
    </>
  );
}

export default About;

export const fetchArticles = async () => {
  try {
    const response = await axios.get("/data/about.json");
    return response.data;
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
