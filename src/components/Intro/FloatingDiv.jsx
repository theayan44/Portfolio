import React from 'react';
import "./FloatingDiv.css"

const FloatingDiv = (props) => {
  return (
    <div className='floatingDiv'>
        <img src={props.image} alt="" />
        <span>{props.text1}
        <br></br>
        {props.text2}</span>
    </div>
  )
}

export default FloatingDiv