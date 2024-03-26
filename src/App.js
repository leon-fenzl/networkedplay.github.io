import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./components/styles/main.css";
import Homepage from "./Pages/Homepage.js";
import About from "./Pages/About.js";
import Research from "./Pages/Research.js";
import Game from "./Pages/Game.js";
import Credits from "./Pages/Credits.js";
export default function App(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/research" element={<Research/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/credits" element={<Credits/>}/>
        </Routes>
    </BrowserRouter>
  )
}