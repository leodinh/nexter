import React from "react";
import Home from "./Home/Home";
import House1 from "../assets/img/house-1.jpeg";
import House2 from "../assets/img/house-2.jpeg";
import House3 from "../assets/img/house-3.jpeg";
import House4 from "../assets/img/house-4.jpeg";
import House5 from "../assets/img/house-5.jpeg";
import House6 from "../assets/img/house-6.jpeg";
function Homes() {
  const homesList = React.useState([
    {
      id: 1,
      name: "Beautiful Family House",
      location: "USA",
      rooms: 5,
      area: 325,
      price: "1,200,000",
      img: House1
    },
    {
      id: 2,
      name: "Modern Glass Villa",
      location: "Canada",
      rooms: 6,
      area: 450,
      price: "2,750,000",
      img: House2
    },
    {
      id: 3,
      name: "Cozy Country House",
      location: "USA",
      rooms: 4,
      area: 250,
      price: "850,000",
      img: House3
    },
    {
      id: 4,
      name: "Beautiful Family House",
      location: "USA",
      rooms: 5,
      area: 325,
      price: "1,200,000",
      img: House4
    },
    {
      id: 5,
      name: "Large Rustical Villa",
      location: "USA",
      rooms: 5,
      area: 325,
      price: "1,200,000",
      img: House5
    },
    {
      id: 6,
      name: "Beautiful Family House",
      location: "USA",
      rooms: 5,
      area: 325,
      price: "1,200,000",
      img: House6
    }
  ])[0];
  return (
    <React.Fragment>
      {homesList.map(home => (
        <Home
          key={home.id}
          img={home.img}
          name={home.name}
          location={home.location}
          rooms={home.rooms}
          area={home.area}
          price={home.price}
        />
      ))}
    </React.Fragment>
  );
}

export default Homes;
