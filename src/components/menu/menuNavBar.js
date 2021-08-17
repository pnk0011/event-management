import React from "react";
import Menu from "../assets/menu.svg";
import "./menuNavBar.css";
import { Link } from "react-router-dom";
import logoWhite from "../assets/logo-white.svg";

function NavBar() {
  return (
    <div className="mnav">
      <div className="mnav__left">
        <div className="nav-logo">
          <Link to="/">
            <img
              src={logoWhite}
              className="nav-logo__image"
              alt="Logo"
              color="white"
            />
          </Link>
        </div>
        <span className="mnav-tagline">
          Your phone is not a destination. It’s a start.
        </span>
      </div>
      <div className="mnav__right">
        <div className="mnav-menu">
          <div className="mmenu-text">MENU</div>
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
