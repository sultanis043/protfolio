import React from "react";
import './Services.css';
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Resume from './Resume.pdf'

const Services = () => {
    return (
        <div className="services">
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    <br />Beatae nisi consequuntur nulla deleniti! Doloremque officiis debitis incidunt enim neque at.</span>

                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur"></div>
            </div>
            <div className="cards">
                {/* first card */}
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe, AdoboXd"}
                    />
                </div>
                {/* second card */}
                <div style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html, Css, Javascript, React"}
                    />
                </div>
                {/* third card */}
                <div style={{ top: "19rem", left: "12rem" }}>
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
                    />
                </div>
            </div>
        </div>
    )
}

export default Services;