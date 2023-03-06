import { NavLink } from "react-router-dom";
import Logo from "./Logo";

/* link to '/' (<Home />), link to '/about' (<About />) */
function Header() {
  return (
    <header className="max-w-[1240px] my-[20px] md:my-[40px] mx-auto flex justify-between">
      <Logo mainColor={true} />
      <nav className="flex items-center">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return `ml-[10px] md:ml-[50px] text-[1.2rem] md:text-[2.4rem] text-main ${
              isActive ? "underline" : null
            }`;
          }}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => {
            return `ml-[10px] md:ml-[50px] text-[1.2rem] md:text-[2.4rem] text-main ${
              isActive ? "underline" : null
            }`;
          }}
        >
          &Agrave; propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
