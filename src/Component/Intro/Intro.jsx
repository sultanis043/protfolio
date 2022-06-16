import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Insta from '../../img/instagram.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png'
import Crown from '../../img/crown.png'
import Thumbup from '../../img/thumbup.png';
import Glassesemoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Sultan Salahuddin</span>
                    <span>A skilled React, JavaScript developer with proficiency in structuring, developing,
                        and implementing interactive and responsive websites and cross-platform Mobile Applications.</span>
                </div>
                <button className="button i-button">Hire Me</button>
                <div className="i-icon">
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Insta} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={vector1} alt="" />
                <img src={vector2} alt="" />
                <img src={boy} alt="" />
                <img src={Glassesemoji} alt=""/>
                <div style={{top:'-4%',left:'68%'}}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
                </div>
                <div style={{top:'18rem',left:'1rem'}}>
                    <FloatingDiv image={Thumbup} txt1='Best Design' txt2='Award'/>
                </div>
                <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
                <div className="blur" 
                style={{
                    background:'#C1F5FF',
                    top:'17rem',
                    width:'21rem',
                    height:'11rem',
                    left:'-9rem'}}>

                    </div>

            </div>
        </div>

    )
}

export default Intro;