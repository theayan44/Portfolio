import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
    const form = useRef();

    const transition = { duration: 5, type: 'spring' };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x09elfu', 'template_dljrdbg', form.current, 'p8Jbafa9Il0zLjPiz')
            .then((result) => {
                console.log(result.text);
                alert("Thanks for contacting, we will reply soon.");
                window.location.reload();
            }, (error) => {
                console.log(error.text);
                alert("Oops!! Message couldn't be send, please try again.");
                window.location.reload();
            });
    };

    return (
        <div className='contact' id='Contact'>
            <div className="c-left">
                <span>Get in Touch</span>
                <span>Contact me </span>
                <div className="blur c-blur1"></div>
            </div>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{margin: '-120px'}}
                transition={transition}
                className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder='Name' name='user_name' className='user' required />
                    <input type="email" placeholder='Email' name='user_email' className='user' required />
                    <textarea placeholder='Message' name='message' className='user' required ></textarea>
                    <input type="submit" value="Send" className='button c-button' />
                    <div className="blur c-blur2"></div>
                </form>
            </motion.div>
        </div>
    )
}

export default Contact