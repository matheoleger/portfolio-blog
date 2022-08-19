import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import "../../css/Company.css"

function Company() {

    const {name} = useParams();

    const [company, setCompany] = useState("");

    useEffect(() => {
        console.log(name)
        axios.get(`/api/companies/${name}`).then((response) => {
            console.log(response.data)
            setCompany(response.data)})
    }, [])

    const LinkBlank = (props) => (<a href={props.href} target="_blank">{props.children}</a>);

    return (
        <div className="company">
            <ReactMarkdown children={company} components={{a: LinkBlank}} remarkPlugins={[remarkGfm]}/>
        </div>
    )
}

export default Company