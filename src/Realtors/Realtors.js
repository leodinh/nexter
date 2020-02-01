import React from "react";
import Realtor from "./Realtor/Realtor";
import Photo1 from "../assets/img/realtor-1.jpeg";
import Photo2 from "../assets/img/realtor-2.jpeg";
import Photo3 from "../assets/img/realtor-3.jpeg";
function Realtors() {
  const realtorsList = React.useState([
    {
      id: 1,
      img: Photo1,
      name: "Erik Feinman",
      sold: "245"
    },
    {
      id: 2,
      img: Photo2,
      name: "Kim Brown",
      sold: "212"
    },
    {
      id: 3,
      img: Photo3,
      name: "Toby Ramsey",
      sold: "198"
    }
  ])[0];
  return (
    <React.Fragment>
      <h3 className="heading-3">Top 3 Realtors</h3>
      <div className="realtors__list">
        {realtorsList.map(realtor => (
          <Realtor
            img={realtor.img}
            name={realtor.name}
            sold={realtor.sold}
            key={realtor.id}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Realtors;
