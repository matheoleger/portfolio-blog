import React, {useState} from 'react';

import '../../css/ReturnButton.css';
 
function ReturnButton ({link, isFixed}){

    // const [finalBackgroundColor, setFinalBackgroundColor] = useState(backgroundColor);

    return (
        <a className="return-button" href={link} style={(isFixed) ? {position: "fixed"} : {position: "relative"}}>
            {/* <img src={image}/> */}
            ◂ RETOUR
        </a>  
    )
}
 
export default ReturnButton;