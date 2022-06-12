import React from 'react';

import '../css/Main.css';
import MyImage from "../img/profil-for-portfolio.png"; 
import DrawingArrow from "../svg/arrow.svg"

import Home from './main-content/Home';
import Biography from './main-content/Biography';
import Projects from './main-content/Projects';

function Main (){
    return (
        <main class="scroller">
            <Home/>
            <Biography/>
            <Projects/>
        </main>
    )
}
 
export default Main;