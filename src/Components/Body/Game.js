import React from "react";
import "../Styles/body.css";
export default function Game(){
  return(
    <div className="gameDiv">
      <iframe frameborder="0" src="https://itch.io/embed-upload/9613862?color=333333" allowfullscreen="" width="1280" height="720">
        <a href="https://blazingworks.itch.io/networkedplay"></a>
      </iframe>
    </div>
  );
}