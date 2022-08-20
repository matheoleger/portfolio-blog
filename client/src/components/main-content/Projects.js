import React from 'react';

import "../../css/Projects.css"

import Github from "../../img/github.png"

function Projects() {
    return (
        <section class="projects-section main-section" id="projects">
            <h1>PROJETS</h1>
            <div className="projects-content">
                <p>Il n'y a pour l'instant pas de projets affichés ici, vous pouvez retrouver mes projets ici :</p>
                <a href="https://github.com/matheoleger" target="_blank">
                    <img src={Github}/>
                    <h3>Github</h3>
                </a>
            </div>
        </section>
    )
}

export default Projects;