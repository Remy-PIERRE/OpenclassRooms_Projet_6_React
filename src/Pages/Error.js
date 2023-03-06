import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

function ErrorLayout() {
  /* default message to handle errors not from API (don't have status) */
  const message = "Oups! La page que vous demandez n'existe pas!!!!!";
  /* get error throwed */
  const error = useRouteError();
  return (
    <>
      <Header />
      <main className="h-[80vh] mx-auto flex flex-col items-center relative">
        <h1 className="mt-[25%] md:mt-0 text-[9.6rem] md:text-[28.8rem] md:leading-[300px] text-main">
          {error.status || "404"}
        </h1>
        <p className="mt-[10%] md:mt-0 text-[1.8rem] md:text-[3.6rem] text-main text-center">
          {(!error.status && message) || error.message}
        </p>

        <Link
          className="text-[1.4rem] md:text-[1.8rem] text-main hover:text-underline absolute bottom-[15%]"
          to="/"
        >
          Retourner sur la page d’accueil
        </Link>
      </main>
    </>
  );
}

export default ErrorLayout;
