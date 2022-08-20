import React, {useState, useEffect} from 'react';
import axios from 'axios';

import CompetenceItem from "./bio-components/CompetenceItem"

import "../../css/Competences.css"

function Competences() {

    const [competences, setcompetences] = useState({technical: [], personal: []});

    useEffect(() => {
        axios.get("/api/competences").then((response) => {
            console.log(response.data)
            setcompetences(response.data)})
    }, [])

    return (
        <div className="competences-page">
            <h1>Compétences</h1>
            <div className="competences-container">
                <h2 className="competences-category-title">Compétences techniques</h2>
                <div className="competences-list">
                {
                    competences.technical.map((competence, key) =>(
                        <CompetenceItem title={competence.title} level={competence.level}/>
                    ))
                }
                </div>
                <h2 className="competences-category-title">Compétences personnelles</h2>
                <div className="competences-list">
                {
                    competences.personal.map((competence, key) =>(
                        <CompetenceItem title={competence.title} level={competence.level}/>
                    ))
                }
                </div>
            </div>


        </div>
    )
}

export default Competences