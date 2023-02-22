import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles['header']}>
      <Logo mainColor={true} />
      <nav>
        <Link to="/" className={styles['link']}>Accueil</Link>
        <Link to="/about" className={styles['link']}>&Agrave; propos</Link>
      </nav>
    </div>
  );
}
