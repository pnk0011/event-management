import React from "react";

import NavBar from "../nav-bar";
import Explore from "../explore";
import CommentSection from "../comment";
import DifferenceSection from "../differenceSection";
import EventsSection from "../events";

class PNKHome extends React.Component {
  render() {
    return (
      <div className="home">
        <NavBar />
        <Explore />
        <CommentSection />
        <DifferenceSection />
        <EventsSection />
      </div>
    );
  }
}

export default PNKHome;
