import React from 'react';

import '../../css/Biography.css';
import ExperienceImage from '../../img/briefcase.png'
import FormationImage from '../../img/graduation-hat.png'
import CompetenceImage from '../../img/employee.png'

import BoxItem from './bio-components/BoxItem';
import QuickSlideTab from '../includes/QuickSlideTab'
import QuickSlideButton from "../includes/QuickSideButton";

function About (){
    return (
        <section className="bio-section main-section" id="bio">
            <h1>À PROPOS</h1>
            <div className="bio-content">
                <QuickSlideTab border={"2px solid #000"}>
                    <QuickSlideButton backgroundColor={"#000"} title="À propos de moi"/>
                    <QuickSlideButton backgroundColor={"#000"} title="Mon CV" image={CompetenceImage}/>
                </QuickSlideTab>
                <div className="bio-box-item-list">
                    <BoxItem image={ExperienceImage} title="Expériences" description="Mes expériences professionnelles"/>
                    <BoxItem image={FormationImage} title="Formation" description="Mon parcours scolaire"/>
                    <BoxItem image={CompetenceImage} title="Compétences" description="Mes compétences techniques et personnelles"/>
                </div>
            </div>

        </section>
    )
}
 
export default About;