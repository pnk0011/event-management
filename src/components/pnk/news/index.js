import React from "react";

import "./index.css";

const NewsSection = () => {
  return (
    <div className="news-section">
      <div className="news-desc">
        <p className="news-desc-text">Dernières actualités</p>
      </div>
      <div className="news-img-container">
        <div className="news-img"></div>
        <div className="news-img"></div>
        <div className="news-img"></div>
      </div>
      <div className="diff-sec-button">
        <button className="devenir-lomads-button">L’esprit Lomads</button>
      </div>

      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default NewsSection;
