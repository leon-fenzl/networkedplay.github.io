import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./Components/Styles/main.css";
import Homepage from "./Pages/Homepage.js";
import About from "./Pages/About.js";
import Research from "./Pages/Research.js";
import Game from "./Pages/Game.js";

export default function App(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/research" element={<Research/>}/>
        </Routes>
    </BrowserRouter>
  )
}