import React from 'react';
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Facebook from "../../img/Facebook.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import glassesimoji from "../../img/glassesimoji.png";
import crown from "../../img/crown.png";
import FloatingDiv from './FloatingDiv';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';


const Intro = () => {
    const transition = { duration: 2, type: 'spring' };

    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hey! I am</span>
                    <span>Ayan Maji</span>
                    <span>Frontend Developer with high level
                        of experience in web designing and developement,
                        producting the Quality work</span>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                    <button className="button i-button">Hire me</button>
                </Link>
                <div className="i-icons">
                    <a href='https://github.com/theayan44' target='_blank'>
                        <img src={Github} alt="" />
                    </a>
                    <a href='https://www.linkedin.com/in/ayan-maji-b5007621a/' target='_blank'>
                        <img src={Linkedin} alt="" />
                    </a>
                    <a href='https://facebook.com' target='_blank'>
                        <img src={Facebook} alt="" />
                    </a>
                </div>
            </div>

            <div style={{ left: '3%' }} className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                    src={glassesimoji} alt="" />

                <motion.div
                    initial={{ left: '74%' }}
                    whileInView={{ left: '60%' }}
                    transition={transition}
                    style={{ top: '-4%', left: '60%' }}>
                    <FloatingDiv image={crown} text1={'Web'} text2={'Developer'} />
                </motion.div>

                <motion.div
                    initial={{ left: '9rem' }}
                    whileInView={{ left: '1rem' }}
                    transition={transition}

                    style={{ top: '18.3rem', left: '1rem' }}>
                    <FloatingDiv image={thumbup} text1={'Best Design'} text2={'Award'} />
                </motion.div>
                {/* blur effect */}
                <div className="blur"
                    style={{ backgroundColor: "rgb (238 210 255)" }}></div>
                <div className="blur"
                    style={{
                        backgroundColor: '#C1F5FF',
                        top: '17rem',
                        width: '21rem',
                        height: '11rem',
                        left: '-8rem'
                    }}></div>
            </div>
        </div>
    )
}

export default Intro