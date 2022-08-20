import React from 'react';

import '../../css/AboutMe.css';
import SpacePersonSVG from '../../svg/space-person-phone.svg';
import WindowMountainSpaceSVG from '../../svg/window-mountain-space.svg'
import ProgrammingSVG from "../../svg/programming.svg"
import CameraGearPersonSVG from "../../svg/cameragear-person.svg"

function AboutMe (){
    return (
        <div className="about-me">
            <h1>Qui suis-je ?</h1>
            <section className="about-me-section">
                <img src={SpacePersonSVG}/>
                {/* <img src={WindowMountainSpaceSVG}/> */}
                <div>
                    <p>🔎Je m'appelle Mathéo LEGER, j'ai 20 ans et je suis actuellement étudiant en 3ème année dans une école d'informatique.
                    </p>
                    <p>Je suis quelqu'un de curieux et qui aime apprendre de nouvelles choses ! Je suis passionné par de nombreux domaines, il serait donc trop compliqué de tout énumérer...</p>
                    <p>Malgré tout, voici quelques-unes de mes passions : l'espace, la vidéo, le cinéma, l'informatique, le skate, etc...</p>
                </div>
            </section>
            <section>
                <div>
                    <p>💻Passionné par l'informatique et la programmation depuis l'âge de 11 ans, j'ai à cœur de travailler dans ce domaine. 
                    J'ai toujours trouvé le développement (logiciel, web, jeu vidéo, etc...) comme un moyen d'exprimer sa créativité
                    et de pouvoir faire ce que l'on veut dans un monde qui tourne autour des technologies.</p>
                    <p>Mon cursus scolaire a donc été régie par cette envie d'apprendre davantage de chose dans le milieu de la programmation et de pouvoir,
                    un jour, travailler en faisant ce que j'aime.</p>
                </div>
                <img src={ProgrammingSVG}/>
            </section>
            <section>
                <img src={CameraGearPersonSVG}/>
                <div>
                    <p>🎬Ma créativité se reflète aussi via le montage vidéo et plus généralement l'audiovisuel, 
                    qui est un domaine que j'affectionne particulièrement. À titre professionnel ou simplement pour le loisir, 
                    j'aime faire de la vidéo.</p>
                    <p>J'ai pendant longtemps créé mon propre contenu audiovisuel sur YouTube et je compte bien reprendre cette activité !</p>
                    <p>J'ai aussi travaillé, à titre professionnel, pour des créateurs de contenus sur YouTube.</p>
                </div>
            </section>
        </div>

    )
}
 
export default AboutMe;