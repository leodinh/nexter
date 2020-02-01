import React from "react";
import Icon from "../../assets/img/sprite.svg";
function Feature(props) {
  return (
    <div className="feature">
      <svg className="feature__icon">
        <use xlinkHref={`${Icon}#${props.icon}`}></use>
      </svg>
      <h4 className="heading-4 heading-4--dark">{props.title}</h4>
      <p className="feature__text">{props.content}</p>
    </div>
  );
}

export default Feature;
