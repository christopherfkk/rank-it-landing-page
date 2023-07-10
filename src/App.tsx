import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Page from "./pages/Page";
import Header from "./pages/Header";
import ProblemSection from "./pages/ProblemSection";
import Solution from "./pages/Solution";
import Wireframe from "./pages/Wireframe";
import Beta from "./pages/Beta";
import Footer from "./pages/Footer";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/page":
        title = "";
        metaDescription = "";
        break;
      case "/header":
        title = "";
        metaDescription = "";
        break;
      case "/problem-section":
        title = "";
        metaDescription = "";
        break;
      case "/solution":
        title = "";
        metaDescription = "";
        break;
      case "/wireframe":
        title = "";
        metaDescription = "";
        break;
      case "/beta":
        title = "";
        metaDescription = "";
        break;
      case "/footer":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/page" element={<Page />} />
      <Route path="/header" element={<Header />} />
      <Route path="/problem-section" element={<ProblemSection />} />
      <Route path="/solution" element={<Solution />} />
      <Route path="/wireframe" element={<Wireframe />} />
      <Route path="/beta" element={<Beta />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  );
}
export default App;
