import React, {useState} from "react";
import {Link, NavLink} from 'react-router-dom';
import "./Styles/navbar.css";
import imgMenu from "../Components/images/Btt_Menu.png";

export default function Navbar(){
  const [showMenu,setShowMenu] = useState(false);
  let mobileMenu 
  if (showMenu){
    mobileMenu = 
    <ul className="mobile-menu">
      <div className="mobile-menuLinks">
          <Link to="/game" className="mobile-linkName">play!</Link>
          <Link to="/about" className="mobile-linkName">about</Link>
          <Link to="/research" className="mobile-linkName">research</Link>
        </div>
    </ul>
  }
  return(
    <div className="navbar">

      <Link to="/" className="Logo">
        <div className="imglogo"></div>
      </Link>
      <div className="div-bars">
        <button className="bars" onClick={()=> setShowMenu(!showMenu)}><img src={imgMenu} alt="imgMenu" /></button>
      </div>
      {mobileMenu}
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