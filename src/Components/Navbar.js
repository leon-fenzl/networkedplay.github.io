import React from "react";
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import "./styles/navbar.css";
import imgLogo from "../components/images/Logo.png";
import imgMenu from "../components/images/Btt_Menu.png";
export default function Navbar(){
  return(
    <div className="navbar">
      <Link to="/" className="Logo">
        <img src={imgLogo} alt="Logo"/>
      </Link>
      <Link to="/about" className="links">
        <img src={imgMenu} alt="imgMenu" className="bars"/>
      </Link>
      <ul className="menu">
        <Link to="/research" className="links">Research</Link>
        <Link to="/about" className="links">About</Link>
        <Link to="/credits" className="links">Credits</Link>
      </ul>
    </div>
  );
}
