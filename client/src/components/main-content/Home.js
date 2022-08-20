import React from 'react';
import QuickSlideTab from "../includes/QuickSlideTab"
import QuickSlideButton from "../includes/QuickSideButton"

import '../../css/Home.css';
import MyImage from "../../img/profil-for-portfolio.png"; 
import DrawingArrow from "../../svg/arrow.svg"
import Github from "../../img/github.png"
import CVImage from "../../img/cv.png"
import Mail from "../../img/mail.png"


function Home (){
    return (
        <section class="home-section main-section" id="home">
            <div class="profil">
                <img src={MyImage}/>
                <div class="name-desc">
                    {/* <h2 class="title-of-home">Portfolio et blog de</h2> */}
                    <h1 id="firstname">MATHÉO</h1>
                    <h1 id="lastname">LEGER</h1>
                    <div class="description">
                        <img src={DrawingArrow}/>
                        <p>
                            Étudiant dans le domaine de l'informatique. Passionné du monde audiovisuel.
                            Je suis intéréssé par le développement logiciel, l'intelligence artificielle.
                        </p>
                    </div>
                </div>
                <div class="home-utility-button">
                <QuickSlideTab border={"2px solid #000"}>
                    <QuickSlideButton backgroundColor={"#000"} title="Mon profil Github" image={Github} link={"https://github.com/matheoleger"}/>
                    <QuickSlideButton backgroundColor={"#000"} title="Mon CV" image={CVImage} link={"/cv"}/>
                    <QuickSlideButton backgroundColor={"#000"} title="Me contacter" image={Mail} link={"/#contact"}/>
                </QuickSlideTab>
                </div>
            </div>
        </section>

    )
}
 
export default Home;