import React from 'react';

function BoxItem({image, title, description, link}) {

    const userHoverBox = (e) => {
        e.currentTarget.classList.add('box-item-hover');
        e.currentTarget.querySelector('.icon-item').classList.add('icon-item-hover');
    }

    const userExitBox = (e) => {
        e.currentTarget.classList.remove('box-item-hover');
        e.currentTarget.querySelector('.icon-item').classList.remove('icon-item-hover');
    }

    return (
        <a href={link} class="box-item-container" onMouseEnter={userHoverBox} onMouseLeave={userExitBox}>
            <img class="icon-item" src={image}/>
            <div class="box-item-text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </a>
    )
}

export default BoxItem