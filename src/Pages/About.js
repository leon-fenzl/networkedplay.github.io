import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import "../Components/Styles/main.css";
export default function About(){
  return(
    <div className="container">
      <nav><Navbar/></nav>
      <div className="empty1"></div>
      <div className="empty2"></div>
      <div className="about-text"></div>
      <div className="empty3"></div>
      <div className="empty4"></div>
      <footer><Footer/></footer>
    </div>
  );
}