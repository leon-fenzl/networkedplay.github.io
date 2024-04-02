import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import "../Components/Styles/gameBody.css";
/* width="1280" height="720"*/
function Game(){
  const [goFS,setGoFS] = useState(false);
  useEffect(()=>{
    console.log("must've been cliked");
    let e = document.getElementById("my-fullscreen");
    e.requestFullscreen();
  },[goFS])
  return(
    <div className="gameGrid">
      <nav><Navbar/></nav>
        <div className="side1"></div>
        <div className="game" >
          
          
          <button  id="fsBtt" onClick= {(e)=>{setGoFS(!goFS)}}><iframe id = "my-fullscreen" frameborder="none" border="0" src="https://leon-fenzl.github.io/networkedplaywebplay/" allowTransparency="true"></iframe></button>
        </div>
        <div className="side2"></div>
      <footer><Footer/></footer>
    </div>
  );
}
export default Game;
/*
  <iframe frameborder="none" border="0" src="https://leon-fenzl.github.io/networkedplaywebplay/" allowTransparency="true"></iframe>

  <iframe frameborder="0" src="https://itch.io/embed-upload/9971335?color=333333" allowfullscreen="" width="1280" height="720">
    <a href="https://blazingworks.itch.io/networkedplay"></a>
  </iframe>
*/
