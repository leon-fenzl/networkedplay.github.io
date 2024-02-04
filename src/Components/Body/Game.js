import React from "react";
import "../Styles/body.css";
export default function Game(){
  return(
    <div className="gameDiv">
      <iframe frameborder="0" src="https://itch.io/embed-upload/9655483?color=333333" allowfullscreen="" width="1280" height="720">
        <a href="https://blazingworks.itch.io/networkedplay">Play Networkedplay on itch.io</a>
      </iframe>
    </div>
  );
}