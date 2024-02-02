import React from "react";
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import '../Styles/navbar.css';
import imgLogo from "../../images/Networkedplay_Logo.png";
import imgMenu from "../../images/Btt_Menu.png";
const Navbar=()=>{
  return(
    <nav className="navbar">
      <Link to="/" className="Logo">
        <img src={imgLogo} alt="Logo"/>
      </Link>
      <Link to="/about" className="links">
        <img src={imgMenu} alt="imgMenu" className="bars"/>
      </Link>
      <ul className="menu">
        <Link to="/about" className="links">About</Link>
      </ul>
    </nav>
  );
}
export default Navbar;
