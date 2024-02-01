import React from "react";
import {Link} from 'react-router-dom';
import "../../Styles/body.css";
export default function Homepage(){
  return(
    <div className="homepage">
      <Link to="/game" className="links"><button className="btt-play"><h1>Play!</h1></button></Link>
    </div>
  );
}
/*<a href="/game">
<button className="btt-play"><h1>Play!</h1></button>
</a>*/