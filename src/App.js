import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./Components/Styles/main.css";
import Navbar from './Components/Navbar/Navbar.js';
import Homepage from "./Components/Body/Homepage.js";
import Game from "./Components/Body/Game.js"
import About from "./Components/Body/About.js";
import Footer from './Components/Footer/Footer.js';

export default function App(){
  return(
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/game" element={<Game/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}