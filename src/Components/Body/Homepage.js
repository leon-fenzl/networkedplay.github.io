import React from "react";
import {Link} from 'react-router-dom';
import "../Styles/body.css";
import "../Styles/homeBody.css"
import bttPlay from "../images/Btt_Play.png";
export default function Homepage(){
  return(
    <div className="grid">
      <div className="empty1"></div>
      <div className="empty2"></div>
      <div id="middle">
        <div className="gotogame">
          <p className="question">Do we connect to play, or we play to connect?</p>
          <Link to="/game" className="links"><img src={bttPlay} alt="play button"/></Link>
        </div>
      </div>
      <div className="empty3"></div>
      <div className="empty4"></div>
    </div>
  );
}