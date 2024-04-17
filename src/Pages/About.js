import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import imgAbout1 from "../Components/images/about page/background_home_example2.png";
import imgAbout2 from "../Components/images/about page/About_page_artemias_02.png";
import imgAbout3 from "../Components/images/about page/About_page_artemias_03.jpg";
import imgAbout4 from "../Components/images/about page/ARTeCHO_logo.png";
import imgAbout5 from "../Components/images/about page/EN_Co-fundedbytheEU_RGB_WHITE Outline.png";
export default function About(){
  return(
    <div className="regularGrid">
      <nav><Navbar/></nav>
      <div className="empty1"></div>
      <div className="gridCenter">
        <div className="contents">
            <div className="about-texts">
              <h3>
                <p><span id="span1">Networked Play</span> is an interactive experience that 
                delves into the dynamics of living systems, mathematical graphs, and philosophical inquiries. 
                In its initial form, it presents an online game, whose narrative centres around the task of 
                guiding brine shrimp (a.k.a. Artemia) to mix in the ocean, bringing up a reflection about 
                our individual role within a larger collective context. Created by the visual artist Paula Nishijima, 
                the artistic research project was developed as part of the ARTeCHÓ – Art, Economy & Technology Fellowship, 2023.
                </p> 
              </h3>
              <br></br>
              <img src={imgAbout1} alt="imgAbout1" className="imgSrc"/>
              <p className="img-info">Digital rendering sketch for the online game Networked Play.</p>
              <br></br>
              <h3>
                Schools of brine shrimp were studied in researching the <span id="span2">ecological impact that tiny aquatic 
                organisms</span> may have in mixing the ocean waters. Although their size as individuals has little 
                impact on their surroundings, their collective swirling motion helps to <span id="span1">redistribute energy</span>, 
                salt, and nutrients throughout the layers of the ocean. This process plays an important role 
                in regulating the climate and creating the marine plant life upon which many species depend for food.
              </h3>
              <br></br>
              <h3>
                Brine shrimp are naturally drawn towards sources of light. This tendency allows scientists 
                to manipulate their collective movement by controlling light sources such as lasers or LEDs. 
                However, within their group, nobody is telling the Artemias where to go or what to do. 
                Instead, they <span id="span2">self-organise</span> to reach their common target. They navigate and adjust their 
                paths, ensuring they avoid collisions with each other along the way. 
              </h3>
              <br></br>
              <img src={imgAbout2}alt="imgAbout2" className="imgSrc"/>
              <p className="img-info">Frame of footage of experiments with Artemia. Courtesy Bionik-Institut, Westfälische Hochschule (Bocholt, Germany) and Claudia Kruschel.</p>
              <br></br>
              <h3>
              +++
              </h3>
              <h3>
              <br></br>
                In the online game, players connect as the master in a network of brine shrimp. 
                They move towards the light, whose position and extent are controlled by the master. 
                The mission is to guide the Artemias toward six different rocks and make them complete 
                a circuit without backtracking—a reference to <span id="span2">‘Konigsberg bridge problem’</span>, the 
                underpinnings of graph theory.
              </h3>
              <br></br>
              <h3>
                Throughout this journey, the master is confronted with a dilemma in their mission: 
                they can control the swarm of Artemias attracting them with their light, but it is 
                the same light that casts a shadow when pointed to a rock — preventing the group 
                from reaching their target. To accomplish this task, the master will have to pass 
                their <span id="span3">(en)lightening power</span> onto the rocks, so that these irradiate light themselves 
                and the Artemias can thus go towards them. 
              </h3>
              <br></br>
              <h3>
                A surprise is awaiting those who accomplish the mission.  
              </h3>
              <br></br>
              <img src={imgAbout3}alt="imgAbout3" className="imgSrc"/>
              <p className="img-info">Images of Artemias for game animation.</p>
              <br></br>
              <h3>
                Faced with colossal problems, such as the planetary environmental 
                crisis, wars, and mass migration, people start to doubt how much 
                they, as individuals, can really do. It is mainly this presumed 
                sense of disproportion between what concerns the individual and what 
                burdens the collective that generates a widespread feeling of impotence 
                in relation to the issues of the world. Individuals often feel 
                exempted from their responsibilities to the whole, as the problems 
                seem to be too big and distant for their actions to make a difference. 
              </h3>
              <br></br>
              <h3>
                The scope of making the Artemias move towards the light and 
                completing the circuit symbolically represents <span id="span1">churning the waters in the ocean </span> 
                ( or the fluid in the space ). It refers to the notion that 
                within a network, the collective effect is greater than the sum of its 
                parts. Just as the movement of Artemias collectively alters their environment, 
                our interconnected actions as individuals generate amplified effects on the planet. 
              </h3>
              <br></br>
              <h3>
                In a collaboration with Dr. Prof. Tobias Seidl (Westfälisches Institut 
                für Bionik, Bocholt, Germany) and Claudia Kruschel (Marine ecologist, 
                Berlin, Germany), Paula Nishijima has researched into the swarming behaviour 
                of Artemias, which originated the framework for the ludo-narrative of
                <span id="span1"> Networked Play’s </span> online game. The footage of the experiments performed 
                with Artemias in the lab were used for a video installation that is 
                going to be exhibited at ETOPIA Center for Art and Technology together
                with the online game and the research mapping.
              </h3>
              <br></br>
            </div>
            <div className="line"></div>
            <br></br>
            <h2>Credits</h2>
            <div className="credit-block">
              <h3>
               <span> Concept & visuals: <Link id="link-to-sites" to="http://paulanishijima.com">Paula Nishijima</Link></span>
              </h3>
              <br/>
              <h3>
                Game Design: Paula Nishijima & León Fenzl
              </h3>
              <br/>
              <h3>
                <span>Game & web development: <Link id="link-to-sites" to="https://leonfenzl.com">León Fenzl</Link></span>
              </h3>
              <br/>
              <h3>
                Scientists collaborators: Dr. Prof. Tobias Seidl (Westfälische Hochschule, Bocholt, Germany) & Claudia Kruschel (Marine ecologist, Berlin, Germany)
              </h3>
              <br/>
              <h3>
                Sound design re-mixed from ‘Logic Moon’ (freesound.org)
              </h3>
            </div>
            <br></br>
            <h2>Thank you</h2>
            <div className="thanks-block">
            <h3>
              Andre Asai<br/>
              Azahara Cerezo<br/>
              Blanca Pérez Ferrer<br/>
              Brad Walrond<br/>
              Carlos Monleon Gendall<br/>
              César Escudero Andaluz<br/>
              Claudia Kruschel<br/>
              Cristobal Ascencio Ramos<br/>
              Dmstfctn<br/>
              Egor Kraft<br/>
              Fanny Zaman<br/>
              Felix Fritsch<br/>
              Hrvoje Hiršl<br/>
              Ianis Dovrev<br/>
              Inte Gloerich<br/>
              Jonas Lund<br/>
              Lorenzo Gerbi<br/>
              Lucrezia Paris<br/>
              Manuel Rosel <br/>
              Marlou van der Cruijsen<br/>
              Merlina Rani<br/>
              Michele Bazzoli<br/>
              Rosanna Dinuzzo<br/>
              Susana Ballesteros & Jano Montañes<br/>
              Peter Kærgaard Andersen<br/>
              Silvia Binda Heiserova<br/>
              Tobias Seidl<br/>
              </h3>
            </div>
            <h3>
              Co-funded by the European Union and supported by ARTeCHÓ, 
              initiative created by SERN – Startup Europe Regions Network 
              (Belgium), Baltan Laboratories (Netherlands), FZC-Etopia Center for Art & 
              Technology (Spain), Frankfurt School Blockchain Center (Germany) and 
              MEET Digital Cultural Center (Italy). ©Paula Nishijima
            </h3>
            <br/>
            <h3>
              <span>
              Views and opinions expressed are however those of the author(s) 
              only and do not necessarily reflect those of the European Union and 
              therefore the European Union cannot be held responsible for them.
              </span>
            </h3>
            <br/>
            <div className="imgs-backers">
              <img src={imgAbout5} alt="imgAbout5" id="imgBacker2"/>
              <img src={imgAbout4} alt="imgAbout4" id="imgBacker1"/>
            </div>
            <br/>
        </div>
      </div>
      <div className="empty2"></div>
    </div>
  );
}
/*
      <footer>
        <br/>
        <Footer/>
      </footer>
*/