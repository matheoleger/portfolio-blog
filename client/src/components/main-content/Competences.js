import React, {useState, useEffect} from 'react';
import axios from 'axios';

import CompetenceItem from "./bio-components/CompetenceItem"

import "../../css/Competences.css"

function Competences() {

    const [competences, setcompetences] = useState([]);

    useEffect(() => {
        axios.get("/api/competences").then((response) => {
            console.log(response.data)
            setcompetences(response.data)})
    }, [])

    return (
        <div className="competences-page">
            <h1>Compétences</h1>
            <div className="competences-list">
            {
                competences.map((competence, key) =>(
                    <CompetenceItem title={competence.title} level={competence.level}/>
                ))
            }
            </div>

        </div>
    )
}

export default Competences