import React from "react";
import ChevronLeft from "../assets/chevron-left.svg";
import ChevronRight from "../assets/chevron-right.svg";
import Card from "./card";
import EventsBorderTop from "../assets/events-border-top.svg";
import EventsBorderBottom from "../assets/events-border-bottom.svg";
import "./index.css";

const EventsSection = () => {
  return (
    <div className="events-section">
      <img
        className="events-top-border"
        src={EventsBorderTop}
        alt="border top"
      />
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
        <div className="card-slider">
          <div className="arrow-icon">
            <img src={ChevronLeft} alt="ChevronLeft" height="37px" />
          </div>
          <div className="arrow-icon">
            <img src={ChevronRight} alt="ChevronRight" height="37px" />
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "250px" }}>
        <img
          className="comment-bott-border"
          src={EventsBorderBottom}
          alt="border top"
        />
      </div>
    </div>
  );
};

export default EventsSection;
