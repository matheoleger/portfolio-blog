import React from 'react';

import ReturnButton from "../includes/ReturnButton";

import '../../css/CurriculumVitae.css';
import CV from '../../pdf/LEGER_Mathéo-CV.pdf'

function CurriculumVitae (){
    return (
        <div>
            <ReturnButton link={"/#about"}/>
            <div className="cv-content">
                <div>
                <h1>MON CV</h1>
                </div>

                <iframe src={CV}/>
            </div>
        </div>

    )
}
 
export default CurriculumVitae;