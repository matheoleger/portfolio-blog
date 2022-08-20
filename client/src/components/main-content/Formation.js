import React from 'react';

import TimelineList from "./bio-components/TimelineList"
import ReturnButton from "../includes/ReturnButton";

function Formation() {

    return (
        <div className="formation">
            <ReturnButton link={"/#about"}/>
            <h1>Formation</h1>
            <TimelineList linkToApi="/api/formation"/>
        </div>
    )
}

export default Formation