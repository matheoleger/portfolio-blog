import React from 'react';

import '../../css/Biography.css';
import ExperienceImage from '../../img/briefcase.png'
import FormationImage from '../../img/graduation-hat.png'
import CompetenceImage from '../../img/employee.png'

import BoxItem from './bio-components/BoxItem';

function About (){
    return (
        <section class="bio-section main-section" id="bio">
            <h1>À PROPOS</h1>
            <div class="bio-box-item-list">
                <BoxItem image={ExperienceImage} title="Expériences" description="Mes expériences professionnelles"/>
                <BoxItem image={FormationImage} title="Formation" description="Mon parcours scolaire"/>
                <BoxItem image={CompetenceImage} title="Compétences" description="Mes compétences techniques et personnelles"/>
            </div>
        </section>
    )
}
 
export default About;