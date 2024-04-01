import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import "./Styles/navbar.css";
import imgMenu from "../Components/images/Btt_Menu.png";
import BurgerMenu from "./BurgerMenu";
export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  return(
    <div className="navbar">
      <Link to="/" className="Logo">
        <div className="imglogo"></div>
      </Link>
      <div className="div-bars"><img src={imgMenu} alt="imgMenu" className="bars"/></div>
      <ul className="bars-menu">
        <div className="menuLinks">
          <BurgerMenu></BurgerMenu>
        </div>
      </ul>
      <ul className="menu">
        <div className="menuLinks">
          <Link to="/about" className="linkName">about</Link>
          <Link to="/research" className="linkName">research</Link>
        </div>
      </ul>
    </div>
  );
}
/*
className="bars-menu"

<Link to="/about" className="linkName">about</Link>
<Link to="/research" className="linkName">research</Link>
*/