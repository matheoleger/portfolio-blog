import React from 'react';

function TimelineItem({startDate, endDate, title, description, establishmentLink, establishmentName, linkingWord}) {

    return (
        <div className="timeline-item">
            <div className="timeline-item-header">
                <div className="timeline-item-dates">
                    <h1>{startDate}</h1>
                    <h1>{endDate}</h1>
                </div>
                <div className="timeline-item-header-text">
                    <h2>{title}</h2>
                    <h3>{linkingWord} <a href={establishmentLink}>{establishmentName}</a></h3>
                </div>
            </div>
            <p>{description.map(element => (<span><br/>{element}</span>))}</p>
        </div>
    )
}

export default TimelineItem