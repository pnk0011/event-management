import React from "react";
import ImageUrl from "../assets/office-img.png";
import "./card.css";
const Card = ({ className = ''}) => {
  return (
    <div className={`card ${className}`}>
      <div class="container">
        <div>
          <div className="card-title">
            Event Long Long Title that can be in 2 lines
          </div>
        </div>
        <div className="card-desc-container">
          <div>
            <p className="card-desc-text">Lieu</p>
          </div>
          <div>
            <div className="card-desc-text">02/11/2021</div>
            <div className="card-desc-text-bold"> 10h00 to 12h00</div>
          </div>
        </div>
      </div>
      <img src={ImageUrl} alt="Avatar" style={{ width: "100%" }} />
    </div>
  );
};

export default Card;
