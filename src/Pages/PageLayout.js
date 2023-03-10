import { useEffect } from "react";
import { Outlet, useNavigation, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function PageLayout() {
  /* navigate use to know when route's loader is running (navigate.state => 'loading' or 'idle') */
  const navigate = useNavigation();
  /* location use to detect any route's change (location.path or location.key)*/
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
      <Footer />
    </>
  );
}

export default PageLayout;
