import React from 'react';
import {Link} from "react-router-dom";

import Tag from "./tag"
import '../../css/SummaryCard.css';

function SummaryCard ({imageSrc, title, description, date, tags, slug, id}){
    return (
        <Link className="summary-card" to={`/blog/posts/${slug}`} state={{id}}>
            <img className="summary-card-image" src={imageSrc} alt="image"/>
            <h4 className="summary-card-date">{date.toLocaleDateString("fr-FR")}</h4>
            <div className="tag-list">
                {
                    tags.map((tag, key) => (
                        <Tag key={key} name={tag.name} id={tag.id} color={tag.color}/>
                    ))
                }
            </div>
            <h2 className="summary-card-title">{title}</h2>
            <p className="summary-card-description">{description}</p>
        </Link>
    )
}
 
export default SummaryCard;