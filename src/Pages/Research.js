import React from "react";
import { FullScreen,useFullScreenHandle } from "react-full-screen";
import {Link} from "react-router-dom";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";

import imgResearch from "../Components/images/research page/Networked_play_research_mapping2_no_credits.png";

export default function Research(){
  const handle = useFullScreenHandle();
  return(
    <div className="regularGrid">
      <nav><Navbar/></nav>
      <div className="empty1"></div>
      <div className="gridCenter">
        <div className="research-contents">
          <h2>Research</h2>
          <br/>
          <FullScreen className="fsDiv" handle={handle}>
            <img src={imgResearch} className="imgSrc" id="imgSrc"/>
            <p className="img-info">
              Digital rendering sketch for the online game Networked Play.
              <div className="fsbttHolder">
                <button className="fsbtt" onClick={handle.enter}></button>
              </div>
            </p>
          </FullScreen >
        </div>
      </div>
      <div className="empty2"></div>
      <footer><Footer/></footer>
    </div>
  );
}