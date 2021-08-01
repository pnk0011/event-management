import React from "react";
import ImgUrl1 from "../assets/diff-img1.svg";
import Card from "./card";

import "./index.css";

const EventsSection = () => {
  return (
    <div className="events-section">
      <div className="events-desc">
        <p className="events-desc-text">Réservez un évènement dès maintenant</p>
      </div>
      <div className="card-slider-container">
        <div className="card-container">
          <div>
            <Card />
          </div>
          <div style={{ marginLeft: "30px" }}>
            <Card />
          </div>
          <div style={{ marginLeft: "30px" }}>
            <Card />
          </div>
        </div>
        <div className="card-slider"></div>
      </div>
      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default EventsSection;
