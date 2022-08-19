import React from 'react';

function CompetenceItem({title, level}) {

    return (
        <div className="competences-item">
            <h2>{title}</h2>
            <div className="competences-skillbar-container">
                <div className="competences-skillbar-level" style={(level =="100%") ? {width: level, backgroundColor: '#e0b638'} : {width: level}}></div>
            </div>
        </div>
    )
}

export default CompetenceItem