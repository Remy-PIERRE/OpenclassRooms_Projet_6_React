import styles from './Tags.module.css'

export default function Tags(props) {
    return <div className={styles['container']}>
        {props.tags.map(tag => <div className={styles['tag']} key={tag}><p>{tag}</p></div>)}
    </div>
}