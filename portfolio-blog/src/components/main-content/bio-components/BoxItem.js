import React from 'react';

function BoxItem({image, title, description}) {

    const userHoverBox = (e) => {
        e.target.classList.add('box-item-hover')
    }

    const userExitBox = (e) => {
        e.target.classList.remove('box-item-hover')
    }

    return (
        <div class="box-item-container" onMouseEnter={userHoverBox} onMouseLeave={userExitBox}>
            <img src={image}/>
            <div class="box-item-text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default BoxItem