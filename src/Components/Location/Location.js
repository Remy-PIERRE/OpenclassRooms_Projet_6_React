import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Location.module.css";
import PageLayout from "../PageLayout/PageLayout";
import Carousel from "../Carousel/Carousel";
import Tags from "../Tags/Tags";
import Host from "../Host/Host";
import FoldablesArticlesContainer from "../FoldablesArticles/FoldablesArticlesContainer";

export default function Location() {
  const [accomodation, setAccomodation] = useState("");
  console.log(accomodation);

  const accomodationId = useLocation().state["id"];
  useEffect(() => {
    const annonces = JSON.parse(localStorage.getItem("annonces"));
    const annonce = annonces.filter((annonce) => annonce.id === accomodationId);
    setAccomodation(annonce[0]);
  }, []);

  return (
    <PageLayout>
        <Carousel />
        <div>
            <div>
                <h1>{accomodation.title}</h1>
                <h2>{accomodation.location}</h2>
                <Tags />
            </div>
            <Host />
        </div>
        <FoldablesArticlesContainer />
    </PageLayout>
  );
}
