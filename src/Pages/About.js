import { useState, useEffect } from "react";
import NormalPageLayout from "./PagesLayouts/NormalPageLayout";
import Banner from "../Components/Banner/Banner";
import FoldableArticle from "../Components/FoldableArticle/FoldableArticle";

function About() {
  const [articles, setArticles] = useState(false);

  useEffect(() => {
    if (articles) return;
    fetch("/data/about.json")
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((data) => setArticles(data))
      .catch((error) => console.log("error fetching about annonces", error));
  }, []);

  return (
    <NormalPageLayout>
      <Banner imageUrl={"kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg"} />
      {articles && articles.map(({title, text}) => (
        <FoldableArticle key={title} title={title} text={text} />
      ))}
    </NormalPageLayout>
  );
}

export default About;
