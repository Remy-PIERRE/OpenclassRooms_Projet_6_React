import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { fetchAnnonces } from "../../Pages/Home";
import About, { fetchArticles } from "../../Pages/About";
import Accomodation, { fetchAnnonce } from "../../Pages/Accomodation";
import PageLayout from "../../Pages/PageLayout";
import ErrorLayout from "../../Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: fetchAnnonces
      },
      {
        path: "accomodation/:id",
        element: <Accomodation />,
        loader: fetchAnnonce,
      },
      {
        path: "about",
        element: <About />,
        loader: fetchArticles
      },
    ],
  },
]);

function Routing() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routing;
