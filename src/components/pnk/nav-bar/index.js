import React from "react";
import Menu from "../assets/menu.svg";
import "./index.css";

import logo from "../assets/pnk-logo.svg";

function NavBar() {
  return (
    <div className="nav">
      <div className="nav__left">
        <div className="nav-logo">
          <img src={logo} className="nav-logo__image" alt="Logo" />
        </div>
        <span className="nav-tagline">
          Your phone is not a destination. It’s a start.
        </span>
      </div>
      <div className="nav__right">
        <div className="nav-lang">
          <span className="nav-fr lng">FR</span>
          <div className="nav-seprator"></div>
          <span className="nav-eng lng">ENG</span>
        </div>
        <div className="nav-menu">
          <div className="menu-text">MENU</div>
          <div style={{ marginLeft: "22px", cursor: "pointer" }}>
            <img src={Menu} alt="menu" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
