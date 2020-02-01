import React from "react";

function Realtor(props) {
  return (
    <React.Fragment>
      <img src={props.img} alt="Realtor" className="realtors__img" />
      <div className="realtors__details">
        <h4 className="heading-4 heading-4--light mb-sm">{props.name}</h4>
        <p className="realtors__sold">{props.sold} houses sold</p>
      </div>
    </React.Fragment>
  );
}

export default Realtor;
