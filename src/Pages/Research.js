import React from "react";
import { FullScreen,useFullScreenHandle } from "react-full-screen";
import {Link} from "react-router-dom";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import fsBtt from "../Components/images/fsButton.png";
import imgResearch from "../Components/images/research page/Networked_play_research_mapping2_no_credits.png";

export default function Research(){
  const handle = useFullScreenHandle();
  return(
    <div className="regularGrid">
      <nav><Navbar/></nav>
      <div className="empty1"></div>
      <div className="gridCenter">
        <div className="research-contents">
          <div>
            <FullScreen className="fsDiv" handle={handle}><img src={imgResearch} className="imgSrc" id="imgSrc"/></FullScreen >
            <div className="fsbttHolder"><img src={fsBtt}className="fsbtt" onClick={handle.enter}/></div>
          </div>
        </div>
      </div>
      <div className="empty2"></div>
      <footer><Footer/></footer>
    </div>
  );
}