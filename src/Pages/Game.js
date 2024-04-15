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
    let e = document.getElementById("btt-fullscreen");
    e.requestFullscreen();
  },[goFS]);
  return(
    <div className="gameGrid">
      <nav><Navbar/></nav>
        <div className="side1"></div>
        <div className="game" >
          <button className="fsBtt" onClick= {(e)=>{setGoFS(!goFS)}}>
            <iframe id = "btt-fullscreen" src="https://leon-fenzl.github.io/networkedplaywebplay/" frameborder="none" border="0" aria-hidden="true" allowTransparency="true"></iframe>
          </button>
        </div>
        <div className="side2"></div>
      <footer><Footer/></footer>
    </div>
  );
}
export default Game;
/*
  <iframe frameborder="none" border="0" src="https://leon-fenzl.github.io/networkedplaywebplay/" allowTransparency="true"></iframe>
*/
