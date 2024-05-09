import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="Card_section">
      <div className="card">
        <img src={props.card.img} />
        <h3>{props.card.topic} </h3>
        <p className="card_text">{props.card.content}</p>
      </div>
    </div>
  );
};

export default Card;
