import React from "react";
import {Link} from 'react-router-dom';
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import "../components/styles/body.css";
import "../components/styles/homeBody.css"
import "../components/styles/regularGrid.css"
import "../components/styles/contentGrid.css"
import bttPlay from "../components/images/Btt_Play.png";
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