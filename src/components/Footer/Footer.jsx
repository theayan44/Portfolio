import React from 'react';
import './Footer.css';
import Wave from "../../img/wave.png";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
    return (
        <div className='footer'>
            <img src={Wave} alt="" />
            <div className="f-content">
                <span>theayan44@gmail.com</span>
                <span>ayan.portfolio@gmail.com</span>
                <span>ayan &copy; 2022 reserved</span>
                <div className="f-icons">
                    <a href='https://www.facebook.com/ayan.maji.754' target='_blank'>
                        <Facebook color='white' size='3rem' />
                    </a>
                    <a href='https://twitter.com/AyanMaj19783678' target='_blank'>
                        <Twitter color='white' size='3rem' />
                    </a>
                    <a href='https://www.linkedin.com/in/ayan-maji-b5007621a/' target='_blank'>
                        <LinkedIn color='white' size='3rem' />
                    </a>
                    <a href='https://github.com/theayan44' target='_blank'>
                        <Github color='white' size='3rem' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;