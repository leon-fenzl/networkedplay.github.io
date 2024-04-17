import React from "react";
import { FullScreen,useFullScreenHandle } from "react-full-screen";
import {Link} from "react-router-dom";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import fsBtt from "../Components/images/fsButton.png";
import imgResearch_sm from "../Components/images/research page/Networked_play_research_mapping_EN.png";
import ReactImageMagnify from 'react-image-magnify';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Research(){
  const handle = useFullScreenHandle();
  return(
    <div className="regularGrid">
      <nav><Navbar/></nav>
      <div className="empty1"></div>
      <div className="gridCenter">
        <div className="research-contents">
        <TransformWrapper>
          <TransformComponent>
            <img src={imgResearch_sm} className="resImg" alt="test" />
          </TransformComponent>
        </TransformWrapper>
        <div><p>Mouse/Touch for Pan - Mouse Wheel/Pinch for Zoom In or Out</p></div>
        </div>
      </div>
      <div className="empty2"></div>
      <footer><Footer/></footer>
    </div>
  );
}

/*
<FullScreen className="fsDiv" handle={handle}><img src={imgResearch} className="resImg" id="imgSrc"/></FullScreen >
  <div className="fsbttHolder"><img src={fsBtt}className="fsbtt" onClick={handle.enter}/></div>

  <ReactImageMagnify {...{
    smallImage: {
      alt: 'map-research',
      isFluidWidth: true,
      src: imgResearch_sm
    },
    largeImage: {
      src: imgResearch_lg,
      width: 6000,
      height:2000
    }
  }}/>
*/