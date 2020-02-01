import React from "react";
import Logo from "../assets/img/logo.png";
function Header() {
  return (
    <React.Fragment>
      <img src={Logo} alt="Nexter logo" className="header__logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="header__btn btn">View our properties</button>
      <div className="header__seeon-text">Seen on</div>
      <div className="header__seeon-logos">
        <img src={require("../assets/img/logo-bbc.png")} alt="Seen on logo 1" />
        <img
          src={require("../assets/img/logo-forbes.png")}
          alt="Seen on logo 2"
        />
        <img
          src={require("../assets/img/logo-techcrunch.png")}
          alt="Seen on logo 3"
        />
        <img src={require("../assets/img/logo-bi.png")} alt="Seen on logo 4" />
      </div>
    </React.Fragment>
  );
}

export default Header;
