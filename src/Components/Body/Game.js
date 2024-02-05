import React from "react";
import "../Styles/gameBody.css";
export default function Game(){
  return(
    <div className="gridCon">
      <div className="empty1">empty1</div>
      <div className="empty2"></div>
      <div className="gameDiv game" >
        <iframe frameborder="0" src="https://itch.io/embed-upload/9655483?color=333333" allowfullscreen="" >
          <a href="https://blazingworks.itch.io/networkedplay">Play Networkedplay on itch.io</a>
        </iframe>
      </div>
      <div className="empty3"></div>
      <div className="empty4"></div>
    </div>
    
  );
}
/*width="1280" height="720"*/