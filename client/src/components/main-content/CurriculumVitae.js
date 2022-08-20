import React from 'react';

import '../../css/CurriculumVitae.css';
import CV from '../../pdf/LEGER_Mathéo-CV.pdf'

function CurriculumVitae (){
    return (
        <div className="cv-content">
            <div>
            <h1>MON CV</h1>
            </div>

            <iframe src={CV}/>
        </div>
    )
}
 
export default CurriculumVitae;