import React from 'react';

import '../../css/Home.css';
import MyImage from "../../img/profil-for-portfolio.png"; 
import DrawingArrow from "../../svg/arrow.svg"

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
                    <a class="utility-github-button" href="github.com/matheoleger"></a>
                    <a class="utility-blog-button" href="/blog"></a>
                    <a class="utility-contact-button" href="/#contact"></a>
                </div>
            </div>
        </section>

    )
}
 
export default Home;