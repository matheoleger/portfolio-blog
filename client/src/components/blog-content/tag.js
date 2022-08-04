import React from 'react';
import Color from "color";
import '../../css/Tag.css';

function Tag ({name, color, id}){
    console.log({id})
    const formattedColor = Color(color).alpha(0.5).lighten(0.2);
    return (
        <div style={{backgroundColor: formattedColor.string()}} id={id} class="tag">
            <h4 class="tag-name">{name}</h4>
        </div>
    )
}
 
export default Tag;