import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home, { fetchAnnonces } from "../Pages/Home";
import About, { fetchArticles } from "../Pages/About";
import Accomodation, { fetchAnnonce } from "../Pages/Accomodation";
import ErrorLayout from "../Pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: fetchAnnonces,
      },
      {
        path: "accomodation/:id",
        element: <Accomodation />,
        loader: fetchAnnonce,
      },
      {
        path: "about",
        element: <About />,
        loader: fetchArticles,
      },
    ],
  },
]);
