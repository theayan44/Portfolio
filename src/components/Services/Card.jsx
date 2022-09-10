import React from 'react';
import './Card.css';
const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.emoji} alt="" />
        <span>{props.heading}</span>
        <span id='detail'>{props.detail}</span>
        <button className="card-button">LEARN MORE</button>
    </div>
  )
}

export default Card