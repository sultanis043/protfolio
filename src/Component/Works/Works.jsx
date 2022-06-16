import React from "react";
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';

const Works = () => {
    return (
        <div className="works">
            <div className="awesome">
                <span>Work for All these</span>
                <span>Brand & Clients</span>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    <br />Beatae nisi consequuntur nulla deleniti! Doloremque 
                    <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, perspiciatis?
                    <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    officiis debitis incidunt enim neque at.</span>
                    <button className="button s-button">Hire Me</button>
                <div className="blur s-blur" style={{background:"#abf1ff94"}}></div>
            </div>
            {/* w-right */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <a href="https://www.upwork.com" target="_blank" rel="noreferrer">
                        <img src={Upwork} alt="" />
                        </a>
                    </div>
                    <div className="w-secCircle">
                        <a href="https://www.fiverr.com" target="_blank" rel="noreferrer">
                        <img src={Fiverr} alt="" />
                        </a>
                    </div>
                    <div className="w-secCircle">
                    <a href="https://www.amazon.com" target="_blank" rel="noreferrer">
                        <img src={Amazon} alt="" />
                        </a>
                    </div>
                    <div className="w-secCircle">
                    <a href="https://www.shopify.com" target="_blank" rel="noreferrer">
                        <img src={Shopify} alt="" /></a>
                    </div>
                    <div className="w-secCircle">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <img src={Facebook} alt="" /></a>
                    </div>
                </div>
                {/* Background circle */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works;