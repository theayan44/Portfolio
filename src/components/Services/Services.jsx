import React from 'react';
import './Services.css';
import Card from './Card';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "../../Resume.pdf";
import { motion } from 'framer-motion';

const Services = () => {
    const transition = { duration: 2, type: 'spring' }

    return (
        <div className='services' id='Services'>
            {/* left side */}
            <div className="s-left">
                <motion.div
                    initial={{ left: '-9rem' }}
                    whileInView={{ left: '-4rem' }}
                    viewport={{margin: '-10px'}}
                    transition={transition}
                    style={{ left: '-4rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Development'}
                        detail={"Java, JavaScript, React, Node, MySql, MongoDB"}
                    />
                </motion.div>
                <motion.div
                    initial={{ left: '19rem' }}
                    whileInView={{ left: '16rem' }}
                    viewport={{margin: '-140px'}}
                    transition={transition}
                    style={{ top: '12rem', left: '16rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'UI/UX'}
                        detail={"HTML, CSS, JavaScript, React, Bootstrap, Tailwind"}
                    />
                </motion.div>
                <motion.div
                    initial={{ left: '6rem' }}
                    whileInView={{ left: '-2rem' }}
                    viewport={{margin: '-80px'}}
                    transition={transition}
                    style={{ top: '19rem', left: '-2rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe, Paint 3D"}
                    />
                </motion.div>
                <div className="blur s-blur1"></div>
            </div>

            {/* right side */}
            <div className="s-right">
                <span>My All</span>
                <span>Awesome Services</span>
                <span>Here are the all services that Provide by me.</span>
                <span>I provide these awesome services with high accuracy
                    and profiency.</span>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur2"></div>
            </div>
        </div>
    )
}

export default Services