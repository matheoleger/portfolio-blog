import React from 'react';
import {Link} from "react-router-dom";

import Tag from "./tag"
import '../../css/SummaryCard.css';

function SummaryCard ({imageSrc, title, description, date, tags, slug, id}){
    console.log({id})
    return (
        <Link class="summary-card" to={`/blog/posts/${slug}`} state={{id}}>
            <img class="summary-card-image" src={imageSrc} alt="image"/>
            <h4 class="summary-card-date">{date.toLocaleDateString("fr-FR")}</h4>
            <div class="tag-list">
                {
                    tags.map((tag) => (
                        <Tag name={tag.name} id={tag.id} color={tag.color}/>
                    ))
                }
            </div>
            <h2 class="summary-card-title">{title}</h2>
            <p class="summary-card-description">{description}</p>
        </Link>
    )
}
 
export default SummaryCard;