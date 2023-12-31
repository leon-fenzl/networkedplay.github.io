import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./Styles/main.css";
import Navbar from './Components/Navbar/Navbar.js';
import Homepage from "./Components/Body/Homepage.js";
import About from "./Components/Body/About.js";
import Footer from './Components/Footer/Footer.js';

export default function App(){
  return(
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/networkedplay.github.io/" element={<Homepage/>}/>
          <Route path="/networkedplay.github.io/about/" element={<About/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}