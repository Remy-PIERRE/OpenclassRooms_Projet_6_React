import styles from './Shell.module.css';

export default function Shell(props) {
    return <div className={`${styles['shell']} ${props.className}`}>{props.children}</div>
}