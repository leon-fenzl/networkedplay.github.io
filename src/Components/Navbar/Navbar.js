import React from "react";
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
import '../../Styles/navbar.css'

const Navbar=()=>{
  return(
    <nav className="navbar">
      <Link to="/networkedplay.github.io" className="Logo"><h1>Networkedplay</h1></Link>
      <FaBars className="bars"/>
      <ul className="menu">
        <Link to="/networkedplay.github.io/about" className="links">About</Link>
      </ul>
    </nav>
  );
}
export default Navbar;
