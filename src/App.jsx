import { useEffect } from "react";
import "./App.css";
import { getDataFromApi } from "./utils/api.js";

//router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//header and footer
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

//pages

import Home from "./pages/home/Home.jsx";
import Explore from "./pages/explore/Explore.jsx";
import Details from "./pages/details/Details.jsx";
import SearchResult from "./pages/searchResult/SearchResult.jsx";
import PageNotFound from "./pages/404/PageNotFound.jsx";

function App() {
  const fetchApiData = () => {
    getDataFromApi("/movie/popular").then((data) => {
      console.log(data);
    });
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query " element={<SearchResult />} />
        <Route path="/:media-type/:id" element={<Details />} />
        <Route path="/explore/:media-type" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
