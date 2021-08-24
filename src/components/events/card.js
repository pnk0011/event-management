import React from "react";
import ImageUrl from "../assets/office-img.png";
import "./card.css";
const Card = ({ newsInfo, className = "" }) => {
  console.log("newsInfo", newsInfo);
  return (
    <div className={`card ${className}`}>
      <div class="container">
        <div>
          <div className="card-title">{newsInfo.event_title}</div>
        </div>
        <div className="card-desc-container">
          <div>
            <p className="card-desc-text">{newsInfo.event_venue_short}</p>
          </div>
          <div>
            <div className="card-desc-text">{newsInfo.start_date}</div>
            <div className="card-desc-text-bold">
              {newsInfo.start_time} to {newsInfo.end_time}
            </div>
          </div>
        </div>
      </div>
      <img
        src={newsInfo.thumbnail_img}
        alt="Avatar"
        style={{
          width: "100%",
          borderBottomRadius: "10px",
          bottom: 0,
          height: "135px",
        }}
      />
    </div>
  );
};

export default Card;
