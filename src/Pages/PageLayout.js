import { useEffect } from "react";
import { Outlet, useNavigation, useLocation } from "react-router-dom";
/* <Header /> in router is mandatory (use <NavLink />) */
import Header from "../Components/Header/Header";

function PageLayout() {
  /* navigate use to know when route's loader is running */
  const navigate = useNavigation();
  /* location use to detect any route's change */
  const location = useLocation();

  /* onChangeRoute => going to top of page */
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location]);

  return (
    <>
      <Header />
      <main>
        {navigate.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
}

export default PageLayout;
