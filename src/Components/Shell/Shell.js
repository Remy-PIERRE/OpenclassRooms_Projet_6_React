import styles from './Shell.module.css';

export default function Shell(props) {
    return <div className={`${styles[props.size]} ${props.className}`}>{props.children}</div>
}