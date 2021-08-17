import React from "react";
import "./index.css";
import ImgUrl1 from "../assets/menu-img1.svg";
import ImgUrl2 from "../assets/menu-img2.svg";
import MenuNavBar from "./menuNavBar";
import MenuContent from "./menuContent/index";
import { Link } from "react-router-dom";
import "./menuNavBar.css";
class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="image-pnk">
          <img src={ImgUrl1} alt="logo" />
        </div>

        <MenuNavBar />
        <MenuContent />
        <div className="menu-img-bottom">
          <Link to="/menu">
            <img src={ImgUrl2} alt="menu" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;
