import React from 'react';
import './Footer.css';
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Github from "@iconscout/react-unicons/icons/uil-github"

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" />
            <div className="f-content">
                <span>
                    sultanis043@gmail.com
                </span>
                <div className="f-icons">
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <Insta color="white" size="3rem" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <Facebook color="white" size="3rem" />
                    </a>
                    <a href="https://www.github.com" target="_blank" rel="noreferrer">
                        <Github color="white" size="3rem" />
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Footer