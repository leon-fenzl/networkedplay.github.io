import React from "react";
import "../../Styles/body.css";
export default function Homepage(){
  return(
    <div className="homepage">
      <a href="/game">
        <button className="btt-play"><h1>Play!</h1></button>
      </a>
    </div>
  );
}