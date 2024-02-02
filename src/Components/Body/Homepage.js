import React from "react";
import {Link} from 'react-router-dom';
import "../Styles/body.css";
import bttPlay from "../../images/Btt_Play.png";
export default function Homepage(){
  return(
    <div className="homepage">
      <Link to="/game" className="links"><img src={bttPlay} alt="play button"/></Link>
    </div>
  );
}
/*<a href="/game">
<button className="btt-play"><h1>Play!</h1></button>
</a>*/