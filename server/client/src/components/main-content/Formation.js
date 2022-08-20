import React from 'react';

import TimelineList from "./bio-components/TimelineList"

function Formation() {

    return (
        <div className="formation">
            <h1>Formation</h1>
            <TimelineList linkToApi="/api/formation"/>
        </div>
    )
}

export default Formation