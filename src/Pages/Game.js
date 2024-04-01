import React from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import "../Components/Styles/gameBody.css";
/* width="1280" height="720"*/
export default function Game(){
  return(
    <div className="gameGrid">
      <nav><Navbar/></nav>
        <div className="empty1"></div>
        <div className="game" >
        <iframe frameborder="none" src="https://itch.io/embed-upload/10070636?color=000000" allowfullscreen="" width="1280" height="720" allowTransparency="true">
          <a href="https://blazingworks.itch.io/networkedplay"></a>
        </iframe>
        </div>
        <div className="empty2"></div>
      <footer><Footer/></footer>
    </div>
  );
}

/*
  <iframe frameborder="0" src="https://itch.io/embed-upload/9971335?color=333333" allowfullscreen="" width="1280" height="720">
    <a href="https://blazingworks.itch.io/networkedplay"></a>
  </iframe>
*/