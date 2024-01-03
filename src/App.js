import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar.js';
import Homepage from "./Components/Body/Homepage.js";
import Curricullum from "./Components/Body/Curricullum.js";
import Modeling from './Components/Body/Modeling.js';
import Anims from './Components/Body/Animations.js';
import About from "./Components/Body/About.js";
import Footer from './Components/Footer/Footer.js';
import "./Styles/main.css";
function App(){
  return(
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/networkedplay.github.io" element={<Homepage/>}/>
          <Route path="/networkedplay.github.io/about" element={<About/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;