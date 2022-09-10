import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import { Link } from 'react-scroll';


const Navbar = () => {
    return (
        <div className='navbar' id='Navbar'>
            <div className='n-left'>
                <div className='n-name'>Ayan</div>
                <Toggle />
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experiences' smooth={true}>
                            <li>Experiences</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li>Portfolio</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                    <button className='n-button button'>
                        Contact
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar