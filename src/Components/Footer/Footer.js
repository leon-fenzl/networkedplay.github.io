import React from "react";
import "../Styles/footer.css";
export default function Footer(){
  return(
    <footer>
      <div className="footer-flexbox">
        <p className="footer-text">
          Supported by ARTeCHÓ, co-funded by the European Union,
          initiative created by SERN – Startup Europe Regions Network (Belgium), Baltan Laboratories (Netherlands), </p>
          <p className="footer-text">FZC-Etopia Center for Art & Technology (Spain),
          Frankfurt School Blockchain Center (Germany) and MEET Digital Cultural Center (Italy).
        </p>
      </div>
    </footer>
  );
}