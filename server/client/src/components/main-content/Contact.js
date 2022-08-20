import React, {useState, useEffect} from 'react';

import "../../css/Contact.css"
import Logo from "../../img/logo-ml.png"
import Mail from "../../img/mail.png"
import Linkedin from "../../img/linkedin.png"
import Github from "../../img/github.png"

function Contact() {

    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleMessageChange = event => {
        const formattedMessage = event.target.value.replace(/\n/gm, "%0D");
        setMessage(formattedMessage);
    }

    const handleSubjectChange = event => {
        setSubject(event.target.value);
        console.log(subject);
    }


    return (
        <section class="contact-section main-section" id="contact">
            <div className="contact-content">
                <div className="contact-left-side">
                    <h1>CONTACTER</h1>
                    <div className="contact-informations">
                        <img src={Logo} width="100" height="100"/>
                        <p>Contactez moi pour plus de renseignement 📜</p>
                        <div>
                            <img src={Mail}/>
                            <p>matheo.leger@ynov.com</p>
                        </div>
                        <a href="https://www.linkedin.com/in/math%C3%A9o-leger/" target="_blank">
                            <img src={Linkedin}/>
                            <h3>Linkedin</h3>
                        </a>
                        <a href="https://github.com/matheoleger" target="_blank">
                            <img src={Github}/>
                            <h3>Github</h3>
                        </a>
                    </div>
                    
                </div>
                <div className="form-container"> 
                    <form className="form-mailto">
                        <h3>Envoyez moi un mail 😉</h3>
                        <input type="text" placeholder="Sujet de votre mail" onChange={handleSubjectChange}/>
                        <textarea placeholder="Votre message" onChange={handleMessageChange}/>
                        <a href={`mailto:matheo.leger@ynov.com?subject=[FROM PORTFOLIO]${subject}&body=${message}`}>Envoyer le mail</a>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact