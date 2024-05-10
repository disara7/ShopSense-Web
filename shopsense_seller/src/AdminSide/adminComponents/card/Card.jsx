import React from "react";
import "./card.css";
import { Icon } from "@mui/material";
const card = (props) => {
  return (
    <div className={props.id}>
      <div className="card-icon">{props.icon}</div>
      <div className="card-txt">
        <span className="card-txt-1">{props.txt1}</span>
        <span className="card-txt-2">{props.txt2}</span>
      </div>
    </div>
  );
};

export default card;
