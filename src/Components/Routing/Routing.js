import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import PageNotFound from "../../Pages/PageNotFound";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default Routing;
