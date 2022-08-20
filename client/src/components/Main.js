import React from 'react';

import '../css/Main.css';
import MyImage from "../img/profil-for-portfolio.png"; 
import DrawingArrow from "../svg/arrow.svg"

import Home from './main-content/Home';
import About from './main-content/Biography';
import Projects from './main-content/Projects';
import Contact from './main-content/Contact';

function Main (){
    return (
        <main className="scroller">
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
        </main>
    )
}
 
export default Main;