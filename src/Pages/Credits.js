import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import "../Components/Styles/creditGrid.css"
export default function Credits(){
  return(
    <div className="regularGrid">
      <nav><Navbar/></nav>
      <div className="empty1"></div>
      <div className="gridCenter">
        <div className="contentGrid">
          <div className="contentName"><h2>Credits</h2></div>
            <div className="creditGrid">
              <h3 className="creditsType">
                Art and Sounds:
              </h3>
              <h3 className="creditsName">
                Paula Kani Nishijima
              </h3>
              <h3 className="creditsType">
                Game Design:
              </h3>
              <h3 className="creditsName">
                Paula Kani Nishijima - León Fenzl
              </h3>
              <h3 className="creditsType">
                Code:
              </h3>
              <h3 className="creditsName">
                León Fenzl
              </h3>
            </div>
          </div>
      </div>
      <div className="empty2"></div>
      <footer><Footer/></footer>
    </div>
  );
}