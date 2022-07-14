import React from 'react';

import '../../css/SummaryCard.css';

function SummaryCard ({imageSrc, title, description, date}){
    return (
        <div class="summary-card">
            <img class="summary-card-image" src={imageSrc} alt="image"/>
            <h4 class="summary-card-date">{date}</h4>
            <h2 class="summary-card-title">{title}</h2>
            <p class="summary-card-description">{description}</p>
        </div>
    )
}
 
export default SummaryCard;