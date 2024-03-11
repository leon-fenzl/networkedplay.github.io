import React from "react";
import {Link} from 'react-router-dom';
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import "../Components/Styles/body.css";
import "../Components/Styles/homeBody.css"
import "../Components/Styles/regularGrid.css"
import "../Components/Styles/contentGrid.css"
import bttPlay from "../Components/images/Btt_Play.png";
export default function Homepage(){
  return(
    <div className="home-grid">
      <nav><Navbar/></nav>
      <div className="empty1"></div>
      <div className="middle">
        <p className="question">Do we connect to play, or we play to connect?</p>
        <Link to="/game" className="links"><img src={bttPlay} alt="play button"/></Link>
      </div>
      <div className="empty2"></div>
      <footer><Footer/></footer>
    </div>
  );
}