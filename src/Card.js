// Card.js
import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="row">
      <img src="svg/fig2-ny.png" className="thumb2" alt="" />
      <div className="grid-1 ">
        <h3 className="color-black-lighten my-1">{props.number}</h3>
      </div>
      <div className="grid-2 ">
        <h3 className="my-2">{props.title}</h3>
      </div>
      <div className="grid-3 ">
        <p className="my-3 ">{props.subtitle}</p>
      </div>
    </div>
  );
}

export default Card;
