import React, { useState } from "react";
import "../Components/Styles/magnifier.css";
import imgResearch from './images/research page/Networked_play_research_mapping2_no_credits.png';
const Magnifier = ({imageUrl}) =>{

  const [position, setPosition] = useState({ x:0, y:0});
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x:0, y:0});

  const handleMouseOver = (e)=>{
    const{ left, top, width, height } = e.currentTarget.getBoudingClientRect();
    const x = ((e.pageX - left)/width)*100;
    const y = ((e.pageY - top)/height)*100;
    setPosition({x,y});
    
    setCursorPosition({ x: e.pageX - left, y: e.pageY - top});
  };

  return(
    <div className="imgMagContainer" 
    onMouseEnter={() => setShowMagnifier(true)}
    onMouseLeave={() => setShowMagnifier(false)}
    onMouseMove={handleMouseOver}
    >
      {/*Display the main Image*/}
      <img className="targetImg" src={imageUrl} alt=""/>
      <div 
       style={{
        position:"absolute",
        left:`${cursorPosition.x-100}px`,
        top:`${cursorPosition.y-100}px`,
        pointerEvents:"none",
       }}>
        <div className="magnifieD" 
        style={{
          backgroundImage:`url(${imageUrl})`, 
          backgroundPosition:`${position.x}% ${position.y}%`,
        }}/>
      </div>
    </div>
  )
}

export default Magnifier