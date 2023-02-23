import FoldableArticle from '../FoldableArticle/FoldableArticle'

import styles from './LocationFoldablesArticlesList.module.css';

export default function LocationFoldablesArticlesList(props) {

    return <div className={styles['container']}>
        <FoldableArticle title='Description' text={props.description} />
        <FoldableArticle title='Equipements' list={props.equipements} />
    </div>
}