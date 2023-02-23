import { useEffect, useState } from "react";

import styles from "./AboutFoldablesArticlesList.module.css";
import FoldableArticle from "../FoldableArticle/FoldableArticle";

export default function AboutFoldablesArticlesList() {
  const [aboutText, setAboutText] = useState([]);

  useEffect(() => {
    fetch("/about.json")
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((response) => setAboutText(response))
      .catch((error) => console.log(error));
  }, []);

  return <div className={styles["container"]}>
    {aboutText.map(element => <FoldableArticle title={element.title} text={element.text} key={element.title}/>)}
  </div>;
}
