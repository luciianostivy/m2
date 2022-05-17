import React from 'react';
import s from '../styles/Card.modules.css'; 

export default function Card(props) {
  // acá va tu código
  return (
    <div className={props.name === "Cairns" ? s.cardDifferent : s.card}>
        <button> onClick = {props.onClose} className={`${s.btn} ${s.btnColor}`}>X</button>
        <h4> {props.name}</h4>
        <div className= {s.middleDiv}>
          <div>
            <p> min</p>
            <p> {props.min}</p>
          </div>
          <div>
            <p> max</p>
            <p>  {props.max}</p>
          </div>  
            
        </div>
        
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
      </div>
  )
};