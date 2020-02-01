import React from "react";
import Icon from "../../assets/img/sprite.svg";
function Home(props) {
  return (
    <div className="home">
      <img src={props.img} alt="Hourse" className="home__img" />
      <svg className="home__like">
        <use xlinkHref={`${Icon}#icon-heart-full`} />
      </svg>
      <h5 className="home__name">{props.name}</h5>
      <div className="home__location">
        <svg>
          <use xlinkHref={`${Icon}#icon-map-pin`} />
        </svg>
        <p>{props.location}</p>
      </div>
      <div className="home__rooms">
        <svg>
          <use xlinkHref={`${Icon}#icon-profile-male`} />
        </svg>
        <p>{props.rooms} rooms</p>
      </div>
      <div className="home__area">
        <svg>
          <use xlinkHref={`${Icon}#icon-expand`} />
        </svg>
        <p>
          {props.area} m<sup>2</sup>
        </p>
      </div>
      <div className="home__price">
        <svg>
          <use xlinkHref={`${Icon}#icon-key`} />
        </svg>
        <p>${props.price}</p>
      </div>
      <button className="btn home__btn">Contact realtor</button>
    </div>
  );
}

export default Home;
