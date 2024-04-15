import React from "react";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";

import imgResearch from "../Components/images/research page/Networked_play_research_mapping2_no_credits.png";

export default function Research(){
  const [goFS,setGoFS] = useState(false);
  useEffect(()=>{
    console.log("must've been cliked");
    let e = document.getElementById("imgSrc");
    e.requestFullscreen();
  },[goFS]);
  return(
    <div className="regularGrid">
      <nav><Navbar/></nav>
      <div className="empty1"></div>
      <div className="gridCenter">
        <div className="research-contents">
          <h2>Research</h2>
          <br/>
          <img src={imgResearch} className="imgSrc" id="imgSrc"/>
          <p className="img-info">
            Digital rendering sketch for the online game Networked Play.
            <div className="fsbttHolder">
              <button className="fsbtt" onClick= {(e)=>{setGoFS(!goFS)}}></button>
            </div>
          </p>
        </div>
      </div>
      <div className="empty2"></div>
      <footer><Footer/></footer>
    </div>
  );
}