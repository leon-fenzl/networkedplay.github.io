import React from "react";
import {Link} from 'react-router-dom';
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
//import "../Components/Styles/body.css";
import "../Components/Styles/homeBody.css";
import "../Components/Styles/regularGrid.css";
import "../Components/Styles/centerContent.css";
import bttPlay from "../Components/images/bttsPaulaSite_play.png";
import homeVideo from "../Components/images/NP_video_home_low.mp4"
//import homeBg from "../Components/images/"

export default function Homepage(){
  return(
    <div className="home-grid">
      <nav><Navbar/></nav>
      <div className="empty1"></div>
      <div className="middle">
        <div className="home-content">
          <div className="frame-div">
            <video className="homeFrame" src={homeVideo} allowTransparency="true" autoplay="true" allow="autoplay" loop muted></video>
          </div>
          <Link to="/game">
            <img src={bttPlay} id="bttPlay" alt="btt-play"/>
          </Link>
          <p className="question">Do we connect to play, or we play to connect?</p>
        </div>
      </div>
      <div className="empty2"></div>
      <footer><Footer/></footer>
    </div>
  );
}
/*
  frameborder="none" border="0" aria-hidden="true" allowTransparency="true"
  <img src={homeBg} className="imgBg"/>
*/