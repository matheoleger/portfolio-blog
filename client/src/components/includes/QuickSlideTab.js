import React from 'react';

import '../../css/quickSlide.css';
 
function QuickSideTab(props){
    const {backgroundColor, border} = props;
    return (
        <div style={{backgroundColor, border}} className="quickslide-tab">
            {props.children}
        </div>  
    )
}
 
export default QuickSideTab;