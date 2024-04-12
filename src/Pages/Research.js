import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import imgResearch from "../Components/images/research page/Networked_play_research_mapping2_no_credits.png";
export default function Research(){
  return(
    <div className="regularGrid">
      <nav><Navbar/></nav>
      <div className="empty1"></div>
      <div className="gridCenter">
        <div className="contents">
          <h2>Research</h2>
          <div className="research">
            <img src={imgResearch} className="imgSrc"/>
            <p className="img-info">Digital rendering sketch for the online game Networked Play.</p>
          </div>
        </div>
      </div>
      <div className="empty2"></div>
      <footer><Footer/></footer>
    </div>
  );
}