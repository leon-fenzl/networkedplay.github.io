import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import "./Styles/navbar.css";
import imgMenu from "../Components/images/Btt_Menu.png";

export default function Navbar(){
  const DDMenu = ["about","research"]
  return(
    <div className="navbar">
      <Link to="/" className="Logo">
        <div className="imglogo"></div>
      </Link>
      <div className="div-bars">
        <img src={imgMenu} alt="imgMenu" className="bars"/>
        <div className="">
          
        </div>
      </div>
      <ul className="menu">
        <div className="menuLinks">
          <Link to="/game" className="linkName">play!</Link>
          <Link to="/about" className="linkName">about</Link>
          <Link to="/research" className="linkName">research</Link>
        </div>
      </ul>
    </div>
  );
}
/*
className="bars-menu"
<ul className="">
            {
              DDMenu.map((menu) => (
                <li key={menu}>{menu}</li>
              ))}
          </ul>
<Link to="/about" className="linkName">about</Link>
<Link to="/research" className="linkName">research</Link>
*/