import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./Components/Styles/main.css";
import Homepage from "./Pages/Homepage.js";
import About from "./Pages/About.js";
import Game from "./Pages/Game.js";
export default function App(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/game" element={<Game/>}/>
        </Routes>
    </BrowserRouter>
  )
}