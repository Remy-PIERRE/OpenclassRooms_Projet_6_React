import styles from "./AccomodationFoldableArticleContainer.module.css";
import FoldableArticle from "./FoldableArticle";

function FoldableArticleContainer({annonce}) {
  return (
    <div className={styles['container']}>
      <FoldableArticle title="Description" text={annonce.description} style={{width: '100% !important'}}/>
      <FoldableArticle title="Equipements" list={annonce.equipments} />
    </div>
  );
}

export default FoldableArticleContainer;
