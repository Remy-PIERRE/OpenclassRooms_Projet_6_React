import { useLoaderData, redirect } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import AboutFoldableArticleContainer from "../Components/FoldableArticle/AboutFoldableArticleContainer";
import FoldableArticle from "../Components/FoldableArticle/FoldableArticle";

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
    let response = await fetch("/data/about.json");
    if (!response.ok)
      throw {
        message: "Oups! Le serveur ne répond pas.",
        status: "500",
      };
    response = await response.json();
    return response;
  } catch (error) {
    throw {
      message: "Oups! La page que vous demandez n'existe pas.",
      status: "404",
    };
  }
};
