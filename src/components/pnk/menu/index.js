import React from "react";
import "./index.css";
import ImgUrl1 from "../assets/menu-img1.svg";
import ImgUrl2 from "../assets/menu-img2.svg";
import MenuNavBar from "./menuNavBar";
import MenuContent from "./menuContent/index";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="image-pnk">
          <img src={ImgUrl1} alt="pnk" />
        </div>

        <MenuNavBar />
        <MenuContent />
        <div className="menu-img-bottom">
          <img src={ImgUrl2} alt="pnk" />
        </div>
      </div>
    );
  }
}

export default Menu;
