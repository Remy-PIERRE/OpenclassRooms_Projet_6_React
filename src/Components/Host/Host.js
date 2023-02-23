import styles from './Host.module.css'

export default function Host(props) {
    return <div className={styles['container']}>
        <p>{props.host.name}</p>
        <img src={props.host.picture} alt={props.host.name} />
    </div>
}