import React from "react";
import Menu from "../assets/menu.svg";
import "./menuNavBar.css";
import { Link } from "react-router-dom";
import logoWhite from "../assets/logo-white.svg";

function NavBar() {
  return (
    <div className="nav">
      <div className="nav__left">
        <div className="nav-logo">
          <img
            src={logoWhite}
            className="nav-logo__image"
            alt="Logo"
            color="white"
          />
        </div>
        <span className="nav-tagline">
          Your phone is not a destination. It’s a start.
        </span>
      </div>
      <div className="nav__right">
        <div className="nav-menu">
          <div className="menu-text">MENU</div>
          <div style={{ marginLeft: "22px", cursor: "pointer" }}>
            <Link to="/menu">
              <img src={Menu} alt="menu" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
