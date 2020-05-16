import React, { useEffect, useState } from 'react';
import pdf from './Media/CharmaineLam_Resume.pdf'
import Button from '@material-ui/core/Button';
import { Toast } from 'react-bootstrap';
import './CSS/index.css'
import './CSS/contact.css'

export default function Contact () {
    const [emailCopied, setEmailCopied] = useState(false);

    useEffect(() => {
        const icons = document.getElementsByClassName("contact_buttons");
        Array.from(icons).forEach(icon => {
            icon.addEventListener('touchstart', handleTouch, {passive: true});
            icon.addEventListener('mouseenter', hoverFunction);
            icon.addEventListener('mouseleave', leaveFunction);
        })
    }, []);

    const color = "#f7ba8e";

    const handleTouch = (icon)=> {
        icon.target.style.backgroundColor = color;
        setTimeout(()=>icon.target.style.backgroundColor="transparent", 2000);
    };

    const hoverFunction = (icon) => {
        icon.target.style.backgroundColor = color;
    };

    const leaveFunction = (icon) => {        
        icon.target.style.backgroundColor = "transparent";
    };
    
    const copyEmail = (e) => {  
        let temp = document.createElement("input")
        temp.setAttribute("type", "text");
        temp.setAttribute("value", document.getElementById("email").value);
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        setEmailCopied(true);
        document.body.removeChild(temp);
    }

    return (
        <div className="contact" id="contact">
            <div className="placeholder"></div>

            <div className = "content">
                <h1 id="title">— CONTACT —</h1>
                <h3 className="subtitle">Let's connect!</h3>
                <h3 className="subtitle">I am always looking to create new <span className="color">relationships</span>, whether it's for a bubble tea (or coffee) chat or an opportunity to collaborate <span role="img" aria-label="smile">{'\u00A0'}🙂</span></h3>
                <h3 className="subtitle">I am best reached through email or a message on LinkedIn.</h3>

                <div className="contact_info"> 
                    <div id="info">
                        {/* <p id="email">
                        <FontAwesomeIcon style={{marginRight: "10px", marginBottom:"-10px"}} icon = {faEnvelope} size="3x" />
                        c73lam@uwaterloo.ca</p>    */}
                        <Button id="email" value="c73lam@uwaterloo.ca" className="contact_buttons" onClick={copyEmail} classes={{label: 'email'}}>c73lam@uwaterloo.ca</Button>
                        <a href={pdf} target="_blank" rel="noopener noreferrer">
                            <Button id="resume" className="contact_buttons">Download Resume</Button>
                        </a>
        
                        <Toast style={{color: "black"}} show ={emailCopied} onClose={()=>setEmailCopied(false)} delay={2000} autohide>
                            Email Successfully Copied!
                        </Toast>
              
                    </div>
                </div>
            </div>
            <div className="placeholder"></div>
            <div className="placeholder"></div>
        </div>
    )
}