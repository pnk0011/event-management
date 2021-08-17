import React from "react";
import ContactUsImg from "../assets/ContactUsImg.svg";
import "./index.css";

const ContactUsSection = () => {
  return (
    <div>
      <div className="contactus-section">
        <div className="contact-text-container">
          <div className="contactus-align">
            <div className="contact-main-text">
              Le téléphone n’est qu’un moyen, pas une fin.
            </div>
            <div className="contact-text">
              <div style={{ display: "flex", justifyContent: "center" }}>
                Des outils et des conseils pour organiser vos propres évènements
              </div>
            </div>
            <div className="diff-sec-button" style={{ marginTop: "16px" }}>
              <button className="devenir-lomads-button">
                Devenez partenaires
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="contactus-img">
        <div></div>
        <div></div>
        <input placeholder="Name" className="contact-input" />
        <input placeholder="Prénom" className="contact-input" />
        <input
          placeholder="Votre message…"
          className="contact-input"
          style={{ border: "2px solid #ff8200", width: "300px" }}
        />
        <div className="diff-sec-button">
          <button className="devenir-lomads-button" style={{ width: "92px" }}>
            Envoyer
          </button>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ContactUsSection;
