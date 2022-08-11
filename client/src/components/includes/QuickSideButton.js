import React, {useState} from 'react';

import '../../css/quickSlide.css';
 
function QuickSideButton ({type, backgroundColor, link, title, content, image}){

    const [finalBackgroundColor, setFinalBackgroundColor] = useState(backgroundColor);

    return (
        <div 
        style={{backgroundColor: finalBackgroundColor}} 
        onMouseLeave={() => setFinalBackgroundColor(backgroundColor)} 
        onMouseOver={() => setFinalBackgroundColor("var(--main-color)")} 
        title={title} 
        className="quickslide-button"
        >
            <img src={image}/>
        </div>  
    )
}
 
export default QuickSideButton;