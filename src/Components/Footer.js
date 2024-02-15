import React from "react";
import "./Styles/footer.css";
export default function Footer(){
  return(
    <div className="footercustom">
      <div className="footer-flexbox">
        <p className="footer-text">
          Supported by ARTeCHÓ, co-funded by the European Union, 
          initiative created by SERN – Startup Europe Regions Network (Belgium), 
          Baltan Laboratories (Netherlands), 
          FZC-Etopia Center for Art & Technology (Spain), 
        </p>
        <p className="footer-text">
          Frankfurt School Blockchain Center (Germany) 
          and MEET Digital Cultural Center (Italy).
        </p>
      </div>
    </div>
  );
}