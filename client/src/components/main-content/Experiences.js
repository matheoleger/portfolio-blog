import React from 'react';

import TimelineList from "./bio-components/TimelineList"

function Experiences() {

    return (
        <div className="experiences">
            <h1>Expériences</h1>
            <p className="experiences-description">Ici se trouve toutes mes expériences professionnelles !
                Pour plus de détail sur une entreprise, vous pouvez cliquer sur le nom de cette dernière !
                Bonne découverte 😉
            </p>
            <TimelineList linkToApi="/api/experiences"/>
        </div>
    )
}

export default Experiences