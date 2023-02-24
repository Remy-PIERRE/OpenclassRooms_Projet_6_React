import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles['container']}>
      <Logo mainColor={true} />
      <nav className={styles['navbar']}>
        <Link to="/" className={styles['link']}>Accueil</Link>
        <Link to="/about" className={styles['link']}>&Agrave; propos</Link>
      </nav>
    </header>
  );
}

export default Header;
