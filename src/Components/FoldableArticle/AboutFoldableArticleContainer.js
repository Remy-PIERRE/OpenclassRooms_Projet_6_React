import FoldableArticle from "./FoldableArticle";
import styles from "./AboutFoldableArticleContainer.module.css";

function AboutFoldableArticleContainer({articles}) {
  return (
    <div className={styles['container']}>
       {articles &&
        articles.map(({ title, text }) => (
          <FoldableArticle key={title} title={title} text={text} />
        ))}
    </div>
  );
}

export default AboutFoldableArticleContainer;
