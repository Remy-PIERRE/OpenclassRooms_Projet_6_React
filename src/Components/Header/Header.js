import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

/* link to '/' (<Home />), link to '/about' (<About />) */
function Header() {
  return (
    <header className={styles["container"]}>
      <Logo mainColor={true} />
      <nav className={styles["navbar"]}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles["activeLink"] : styles["link"]
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? styles["activeLink"] : styles["link"]
          }
        >
          &Agrave; propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
