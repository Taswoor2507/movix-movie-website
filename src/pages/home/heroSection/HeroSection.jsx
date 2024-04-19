import React, { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  //set states
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  //router hook
  const navigate = useNavigate();

  //handlers
  function searchQueryHandler(e) {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  }

  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Milllions of Movies , Tv Shows and people to discover . Explore now
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for movies and Tv shows ..."
              onKeyUp={(e) => searchQueryHandler(e)}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
