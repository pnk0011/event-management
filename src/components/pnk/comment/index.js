import React from "react";
import ImgUrl1 from "../assets/comment1.svg";
import ImgUrl2 from "../assets/suggestion-img1.svg";
import ImgUrl3 from "../assets/suggestion-img2.svg";
import ImgUrl4 from "../assets/comment2.svg";
import ImgUrl5 from "../assets/comment3.svg";
import ImgUrl6 from "../assets/suggestion-img3.svg";
import ImgUrl7 from "../assets/comment4.svg";
import ImgUrl8 from "../assets/suggestion-img4.svg";
import "./index.css";

function CommentSection() {
  return (
    <div className="comment-section">
      <div>
        <p className="comment-text">Comment ?</p>
      </div>
      <div className="suggestion-sec">
        <div className="suggestion-sec-text">
          <div className="img1">
            <img src={ImgUrl1} alt="desc" />
          </div>
          <div>
            <p className="des-suggestions">
              Des suggestions personnalisées :
              <br />
              <span className="suggestions-text1">
                des événements et des groupes, sélectionnés
              </span>
              <br />
              <span className="suggestions-text1">
                en fonction de vos goûts, et à proximité.
              </span>
            </p>
          </div>
        </div>
        <div>
          <img src={ImgUrl2} alt="desc" />
        </div>
      </div>
      <div className="suggestion-sec">
        <div>
          <img src={ImgUrl3} alt="desc" />
        </div>
        <div className="suggestion-sec-text">
          <div className="img1">
            <img src={ImgUrl4} alt="desc" />
          </div>
          <div>
            <p className="des-suggestions">
              Des suggestions personnalisées :
              <br />
              <span className="suggestions-text1">
                des événements et des groupes, sélectionnés
              </span>
              <br />
              <span className="suggestions-text1">
                en fonction de vos goûts, et à proximité.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="suggestion-sec">
        <div className="suggestion-sec-text">
          <div className="img1">
            <img src={ImgUrl5} alt="desc" />
          </div>
          <div>
            <p className="des-suggestions">
              Des suggestions personnalisées :
              <br />
              <span className="suggestions-text1">
                des événements et des groupes, sélectionnés
              </span>
              <br />
              <span className="suggestions-text1">
                en fonction de vos goûts, et à proximité.
              </span>
            </p>
          </div>
        </div>
        <div>
          <img src={ImgUrl6} alt="desc" />
        </div>
      </div>
      <div className="suggestion-bottom-sec">
        <div className="suggestion-sec-text">
          <div className="img1">
            <img src={ImgUrl7} alt="desc" />
          </div>
          <div>
            <p className="des-suggestions">
              Des suggestions personnalisées :
              <br />
              <span className="suggestions-text1">
                des événements et des groupes, sélectionnés
              </span>
              <br />
              <span className="suggestions-text1">
                en fonction de vos goûts, et à proximité.
              </span>
            </p>
          </div>
          <div>
            <button className="devenir-lomads-button">Devenir Lomads</button>
          </div>
        </div>
        <div>
          <img src={ImgUrl8} alt="desc" />
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
