import React from "react";
import ImgUrl1 from "../assets/explore-bottom-img1.svg";
import ImgUrl2 from "../assets/explore-bottom-img2.svg";
import ImgUrl3 from "../assets/explore-bottom-img3.svg";
import "./index.css";

function Explore() {
  return (
    <div className="explore">
      <div className="dummy-text">Explore ,retrouvez et partagez :</div>
      <div className="dummy-text1">le réseau social autrement avec Lomads.</div>
      <div className="dummy-text2">
        <div className="home-text3">
          Social(e) : (adjectif) relatif à un groupe.
        </div>

        <div className="home-text4">
          La première application qui vous invite à poser votre téléphone
        </div>

        <div className="home-text4">
          pour profiter les événements, les activités, les communautés
        </div>

        <div className="home-text4">
          qui vous corespondent, et bien plus encore…
        </div>
      </div>
      <div className="bg-section">
        <div className="empty-phone">
          {/* <div className="bg-phone"></div> */}
        </div>
      </div>
      <div className="explore-bottom">
        <div>
          <div className="img-container">
            <img src={ImgUrl1} alt="desc" />
          </div>
          <div className="text-center">
            <div className="explore-bottom-text1">Trouvez votre communauté</div>

            <div>Participez à des événements ou à des</div>

            <div>activités qui vous passionnent,</div>

            <div>où que vous soyez.</div>
          </div>
        </div>
        <div>
          <div className="img-container">
            <img src={ImgUrl2} alt="desc" />
          </div>

          <div className="text-center">
            <div className="explore-bottom-text1">Trouvez votre communauté</div>

            <div>Participez à des événements ou à des</div>

            <div>activités qui vous passionnent,</div>

            <div>où que vous soyez.</div>
          </div>
        </div>
        <div>
          <div className="img-container">
            <img src={ImgUrl3} alt="desc" />
          </div>
          <div className="text-center">
            <div className="explore-bottom-text1">Trouvez votre communauté</div>

            <div>Participez à des événements ou à des</div>

            <div>activités qui vous passionnent,</div>

            <div>où que vous soyez.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
