import React from "react";
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import "./Styles/navbar.css";
import imgLogo from "../Components/images/Logo.png";
import imgAbout from "../Components/images/aboutRegular.png";
import imgRes from "../Components/images/researchRegular.png";
import imgMenu from "../Components/images/Btt_Menu.png";
export default function Navbar(){
  return(
    <div className="navbar">
      <Link to="/" className="Logo">
        <div className="imglogo"></div>
      </Link>
      <Link to="/about">
        <img src={imgMenu} alt="imgMenu" className="bars"/>
      </Link>
      <ul className="menu">
        <div className="menuLinks">
          <Link to="/about" className="linkName">about</Link>
          <Link to="/research" className="linkName">research</Link>
        </div>
      </ul>
    </div>
  );
}
