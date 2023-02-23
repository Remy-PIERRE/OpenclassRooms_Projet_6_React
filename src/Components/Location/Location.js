import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import PageLayout from "../PageLayout/PageLayout";
import Carousel from "../Carousel/Carousel";
import Tags from "../Tags/Tags";
import Host from "../Host/Host";
import Rating from "../Rating/Rating";
import LocationFoldablesArticlesList from "./LocationFoldablesArticlesList";

import styles from "./Location.module.css";

export default function Location() {
  const [accomodation, setAccomodation] = useState(false);
  console.log(accomodation);

  const accomodationId = useLocation().state["id"];
  useEffect(() => {
    const annonces = JSON.parse(localStorage.getItem("annonces"));
    const annonce = annonces.filter((annonce) => annonce.id === accomodationId);
    setAccomodation(annonce[0]);
  }, []);

  if (!accomodation) return <div></div>;

  return (
    <PageLayout>
      <Carousel
        pictures={accomodation.pictures}
        alternate={accomodation.title}
      />
      <div className={styles['header']}>
        <div>
          <h1>{accomodation.title}</h1>
          <h2>{accomodation.location}</h2>
          <Tags tags={accomodation.tags}/>
        </div>
        <div className={styles['hostContainer']}>
        <Host host={accomodation.host}/>
        <Rating rating={accomodation.rating}/>
        </div>
        
      </div>
      <LocationFoldablesArticlesList description={accomodation.description} equipements={accomodation.equipments}/>
    </PageLayout>
  );
}
