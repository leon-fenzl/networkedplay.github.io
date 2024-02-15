import React from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import "../Components/Styles/gameBody.css";
export default function Game(){
  return(
    <div className="container">
      <nav><Navbar/></nav>
      <div className="empty1">empty1</div>
        <div className="empty2"></div>
        <div className="gameDiv game" >
        <iframe frameborder="0" src="https://itch.io/embed-upload/9725097?color=333333" allowfullscreen="" width="1280" height="720">
          <a href="https://blazingworks.itch.io/networkedplay"></a>
          </iframe>
        </div>
        <div className="empty3"></div>
        <div className="empty4"></div>
      <footer><Footer/></footer>
    </div>
  );
}
/*width="1280" height="720"*/