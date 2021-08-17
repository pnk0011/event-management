import React from "react";
import RejoinBorderImg1 from "../assets/rejoin-border-img1.svg";
import RejoinBorderImg2 from "../assets/rejoin-border-img2.svg";
import PartnerImg1 from "../assets/partner-img1.png";
import PartnerImg2 from "../assets/partner-img2.png";
import ImgUrl6 from "../assets/suggestion-img3.svg";
import Footer from "../footer";
import ImgUrl1 from "../assets/explore-bottom-img1.svg";
import NavBar from "../nav-bar";
import "./index.css";

class Rejoin extends React.Component {
  render() {
    return (
      <div className="home">
        <NavBar />
        <div className="rejoin-sec">
          <div>
            <div className="rejoin-text">Nous rejoindre</div>
            <div className="rejoin-text1">
              <div className="text-wrapper">
                Lomads est à la fois une plateforme événementielle et un réseau
                social disposant d’une équipe de conseil créatif.
              </div>
            </div>
            <div className="rejoin-text2">
              <div className="text-wrapper">
                Nous sommes une structure à taille humaine animée par un esprit
                de famille. Nous sommes en pleine expansion et recherchons des
                collaborateurs qui se distinguent par leur capacité d’analyse et
                leur créativité.
              </div>
            </div>
          </div>
          <div className="rejoin-backgroung-img">
            <div>
              <img src={RejoinBorderImg1} alt="borderImg" width="100%" />
            </div>
            <div className="border-img2">
              <img src={RejoinBorderImg2} alt="borderImg" width="100%" />
            </div>
          </div>
          <div>
            <div className="rejoin-img1">
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <div className="rejoin-text4">
                    Convaincus de l’importance des rencontres, des échanges et
                    du partage, ils/elles doivent surtout avoir envie de
                    participer à cette nouvelle expérience qui entend tirer le
                    meilleur des nouvelles technologies et de chacun d’entre
                    nous. Notre équipe jeune, dynamique et soudée vous offre
                    l’occasion de travailler dans une ambiance conviviale et
                    entouré de collègues prêts à vous aider.
                  </div>
                  <div className="rejoin-text3">
                    Nous étions incubé a Schoolab, Paris dans le « Starter
                    Program : Saison 11 (Oct 2020 – Avril 2021)»
                  </div>
                </div>
                <div className="rejoin-img2">
                  <img src={PartnerImg1} alt="ImageRejoin" height="500px" />
                </div>
              </div>

              <div>
                <div className="rejoin-img3">
                  <img src={PartnerImg2} alt="ImageRejoin" height="500px" />
                </div>
              </div>
            </div>
            <div className="middle-text">
              <div className="rejoin-text5">Notre éthique de travail</div>
              <div style={{ marginTop: "100px" }}>
                <div className="rejoin-img5">
                  <img src={ImgUrl1} alt="RejoinImg" />
                </div>
                <div className="rejoin-text6">Aller plus loin, ensemble</div>
                <div className="rejoin-text7">
                  Nous aidons honnêtement les autres à s’épanouir et à être
                  remarquables. Pas d’ego.
                </div>
              </div>
            </div>
            <div className="bottom-text">
              <div>
                <div style={{ marginTop: "100px" }}>
                  <div className="rejoin-img5">
                    <img src={ImgUrl1} alt="RejoinImg" />
                  </div>
                  <div className="rejoin-text6">Aller plus loin, ensemble</div>
                  <div className="rejoin-text8">
                    Nous aidons honnêtement les autres à s’épanouir et à être
                    remarquables. Pas d’ego.
                  </div>
                </div>
              </div>
              <div>
                <div style={{ marginTop: "100px" }}>
                  <div className="rejoin-img5">
                    <img src={ImgUrl1} alt="RejoinImg" />
                  </div>
                  <div className="rejoin-text6">Aller plus loin, ensemble</div>
                  <div className="rejoin-text8">
                    Nous aidons honnêtement les autres à s’épanouir et à être
                    remarquables. Pas d’ego.
                  </div>
                </div>
              </div>
              <div>
                <div style={{ marginTop: "100px" }}>
                  <div className="rejoin-img5">
                    <img src={ImgUrl1} alt="RejoinImg" />
                  </div>
                  <div className="rejoin-text6">Aller plus loin, ensemble</div>
                  <div className="rejoin-text8">
                    Nous aidons honnêtement les autres à s’épanouir et à être
                    remarquables. Pas d’ego.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rejoin-img-bottom">
                <img src={ImgUrl6} alt="rejoinImg" />
              </div>
            </div>
            <div>
              <div className="rejoin-bott-text-align">
                <div className="rejoin-bott-text">
                  En rejoignant Lomads vous découvrirez un projet ambitieux et
                  plein de sens, qui vous offre un contexte stimulant, dans
                  lequel vous aurez un rôle prépondérant et la possibilité de
                  développer vos compétences.
                </div>
                <div className="partner-button">
                  <button className="partner-bottom-button">
                    VOIR LES POSTES À POURVOIR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Rejoin;
