import React from "react";
import ImgUrl1 from "../assets/comment1.svg";
import ImgUrl2 from "../assets/suggestion-img1.svg";
import ImgUrl3 from "../assets/suggestion-img2.svg";
import ImgUrl4 from "../assets/comment2.svg";
import ImgUrl5 from "../assets/comment3.svg";
import ImgUrl6 from "../assets/suggestion-img3.svg";
import ImgUrl7 from "../assets/comment4.svg";
import ImgUrl8 from "../assets/suggestion-img4.svg";
import BorderTop from "../assets/comment-top-borderr.svg";
import DiffBorderTop from "../assets/diff-border-top.svg";
import "./index.css";

function CommentSection() {
  return (
    <div>
      <div className="comment-section ">
        <div className="border-height none">
          <img
            className="comment-top-border"
            src={BorderTop}
            alt="border top"
          />
        </div>
        <div>
          <p className="comment-text">Comment ?</p>
        </div>
        <div className="suggestion-sec block">
          <div className="suggestion-sec-text">
            <div className="img1">
              <img src={ImgUrl1} alt="desc" />
            </div>
            <div>
              <div className="des-suggestions">
                <div style={{ marginBottom: "10px" }}>
                  Des suggestions personnalisées :
                </div>

                <div className="suggestions-text1">
                  des événements et des groupes, sélectionnés
                </div>
                <div className="suggestions-text1">
                  en fonction de vos goûts, et à proximité.
                </div>
              </div>
            </div>
          </div>
          <div className="center">
            <img src={ImgUrl2} alt="desc" />
          </div>
        </div>
        <div className="suggestion-sec none">
          <div>
            <img src={ImgUrl3} alt="desc" />
          </div>
          <div className="suggestion-sec-text">
            <div className="img1">
              <img src={ImgUrl4} alt="desc" />
            </div>
            <div>
              <div className="des-suggestions">
                <div style={{ marginBottom: "10px" }}>
                  Des suggestions personnalisées :
                </div>
                <div className="suggestions-text1">
                  des événements et des groupes, sélectionnés
                </div>
                <div className="suggestions-text1">
                  en fonction de vos goûts, et à proximité.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="suggestion-sec none">
          <div className="suggestion-sec-text">
            <div className="img1">
              <img src={ImgUrl5} alt="desc" />
            </div>
            <div>
              <div className="des-suggestions">
                <div style={{ marginBottom: "10px" }}>
                  Des suggestions personnalisées :
                </div>
                <div className="suggestions-text1">
                  des événements et des groupes, sélectionnés
                </div>
                <div className="suggestions-text1">
                  en fonction de vos goûts, et à proximité.
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={ImgUrl6} alt="desc" />
          </div>
        </div>
        <div className="suggestion-bottom-sec none">
          <div className="suggestion-sec-text">
            <div className="img1">
              <img src={ImgUrl7} alt="desc" />
            </div>
            <div>
              <div className="des-suggestions">
                <div style={{ marginBottom: "10px" }}>
                  Des suggestions personnalisées :
                </div>
                <div className="suggestions-text1">
                  des événements et des groupes, sélectionnés
                </div>
                <div className="suggestions-text1">
                  en fonction de vos goûts, et à proximité.
                </div>
              </div>
            </div>
            <div style={{ marginTop: "30px" }}>
              <button className="devenir-lomads-button">Devenir Lomads</button>
            </div>
          </div>
          <div>
            <img src={ImgUrl8} alt="desc" />
          </div>
        </div>
        <div style={{ paddingTop: "200px", zIndex: "10" }} className="none">
          <img
            className="comment-bott-border"
            src={DiffBorderTop}
            alt="border top"
            zIndex="-2"
          />
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
