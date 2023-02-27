import { useEffect } from "react";
import { Outlet, useNavigation, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function PageLayout() {
  const navigate = useNavigation();
  const location = useLocation();

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
