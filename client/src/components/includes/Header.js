import React from 'react';

import ScrollingMouse from '../../svg/scrollingMouse.svg'
import MyLogo from '../../img/logo-ml.png'

import '../../css/header.css';
 
function Header (){

    let isMenuOpen = false;

    const enlargeDiv = () => {

        document.querySelector('.navbar_wrapper').classList.add('navbar_wrapper_appear')
        document.querySelector('.menu-button').classList.add('open')
        isMenuOpen = true;
    }

    const reduceDiv = () => {

        document.querySelector('.navbar_wrapper').classList.remove('navbar_wrapper_appear')
        document.querySelector('.menu-button').classList.remove('open')
        isMenuOpen = false;
    }

    return (
        <div>
            <div className="menu-button" onClick={() => isMenuOpen ? reduceDiv() : enlargeDiv() }>
                <div className="menu-button-burger"></div>
            </div>
            <div className="navbar_wrapper">
                <nav>
                    {/* <img className="menu-logo menu-logo-disappear" src={MyLogo}/> */}

                    <ul>
                        <li><a href="/#home" onClick={() => reduceDiv()}>Accueil</a></li>
                        <li><a href="/#about" onClick={() => reduceDiv()}>À propos</a></li>
                        <li><a href="/#projects" onClick={() => reduceDiv()}>Projets</a></li>
                        <li><a href="/blog" onClick={() => reduceDiv()}>Blog</a></li>
                        <li><a href="/#contact" onClick={() => reduceDiv()}>Contacter</a></li>         
                    </ul>
                </nav>
            </div>
            <div className="scrolling-mouse">
                <img src={ScrollingMouse}/>
            </div>
        </div>  
    )
}
 
export default Header;