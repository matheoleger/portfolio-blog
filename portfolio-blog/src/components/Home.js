import React from 'react';

import '../css/Home.css';
import MyImage from "../img/portefolio.png"; 
import DrawingArrow from "../svg/arrow.svg"

import Biography from './main-content/Biography';

function Home (){
    return (
        <main>
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
                                Je suis intéréssé par le développement logiciel, ainsi que de l'intelligence artificielle.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <Biography/>
        </main>
    )
}
 
export default Home;