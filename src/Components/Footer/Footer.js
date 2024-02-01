import React from "react";
import "../../Styles/footer.css";
export default function Footer(){
  return(
    <footer>
      <div className="footer-flexbox">
        <p className="footer-text">Supported by ARTeCHÓ, </p>
        <p className="footer-text">co-funded by the European Union, </p> 
        <p className="footer-text">initiative created by SERN – Startup Europe Regions Network (Belgium), </p>
        <p className="footer-text">Baltan Laboratories (Netherlands), </p>
        <p className="footer-text">FZC-Etopia Center for Art & Technology (Spain), </p>
        <p className="footer-text">Frankfurt School Blockchain Center (Germany) </p>
        <p className="footer-text"> and MEET Digital Cultural Center (Italy).</p>
      </div>
    </footer>
  );
}