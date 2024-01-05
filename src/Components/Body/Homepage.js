import React from "react";
import "../../Styles/body.css";
export default function Homepage(){
  return(
    <div className="gameDiv">
      <iframe className="game" frameborder="0" src="https://itch.io/embed-upload/9441917?color=333333" allowfullscreen="false" width="1280" height="740">
        <a href="https://blazingworks.itch.io/networkedplay"></a>
      </iframe>
    </div>
  );
}