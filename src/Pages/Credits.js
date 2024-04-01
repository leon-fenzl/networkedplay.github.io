import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";

export default function Credits(){
  return(
    <div className="regularGrid">
      <nav><Navbar/></nav>
      <div className="empty1"></div>
      <div className="gridCenter">
        <div className="contentGrid">
          <div className="contentName"><h2>Credits</h2></div>
            <div className="creditGrid">
              <h1 className="creditsType">
                Art and Sounds:
              </h1>
              <h1 className="creditsName">
                Paula Kani Nishijima
              </h1>
              <h1 className="creditsType">
                Game Design:
              </h1>
              <h1 className="creditsName">
                Paula Kani Nishijima - León Fenzl
              </h1>
              <h1 className="creditsType">
                Code:
              </h1>
              <h1 className="creditsName">
                León Fenzl
              </h1>
            </div>
          </div>
      </div>
      <div className="empty2"></div>
      <footer><Footer/></footer>
    </div>
  );
}