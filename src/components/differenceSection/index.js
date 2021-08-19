import React from "react";
import ImgUrl1 from "../assets/diff-img1.svg";
import ImgUrl2 from "../assets/diff-img2.svg";
import ImgUrl3 from "../assets/diff-img3.svg";

import "./index.css";

const DifferenceSection = () => {
  return (
    <div className="difference-section margin-y">
      <div className="notre-différence">
        <p className="notre-différence-text">Ce qui fait notre différence</p>
      </div>
      <div className="flex-around column margin-y">
        <div>
          <div className="img">
            <img src={ImgUrl1} alt="desc" />
          </div>
          <div>
            <p className="diff-heading text-center ">
              Personnalisées :
              <br />
              <span className="diff-text1">
                des événements et des groupes, sélectionnés
              </span>
              <br />
              <span className="diff-text1">
                en fonction de vos goûts, et à proximité.
              </span>
            </p>
          </div>
        </div>
        <div className="margin-y">
          <div className="img">
            <img src={ImgUrl2} alt="desc" />
          </div>
          <div>
            <p className="diff-heading text-center ">
              Personnalisées :
              <br />
              <span className="diff-text1">
                des événements et des groupes, sélectionnés
              </span>
              <br />
              <span className="diff-text1">
                en fonction de vos goûts, et à proximité.
              </span>
            </p>
          </div>
        </div>
        <div className="margin-y">
          <div className="img">
            <img src={ImgUrl3} alt="desc" />
          </div>
          <div>
            <p className="diff-heading text-center ">
              Personnalisées :
              <br />
              <span className="diff-text1">
                des événements et des groupes, sélectionnés
              </span>
              <br />
              <span className="diff-text1">
                en fonction de vos goûts, et à proximité.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="diff-sec-button">
        <button className="devenir-lomads-button">L’esprit Lomads</button>
      </div>
    </div>
  );
};

export default DifferenceSection;
