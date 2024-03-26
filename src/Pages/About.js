import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function About(){
  return(
    <div className="regularGrid">
      <nav><Navbar/></nav>
      <div className="empty1"></div>
      <div className="gridCenter">
        <div className="contentGrid">
        <div className="contentName"><h2>About</h2></div>
          <div className="contentCenter">
            <h3>
              Dummy text
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
              occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum."
            </h3>
          </div>
        </div>
      </div>
      <div className="empty2"></div>
      <footer><Footer/></footer>
    </div>
  );
}