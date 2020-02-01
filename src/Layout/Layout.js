import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import "../assets/sass/main.scss";
function Layout(props) {
  return (
    <React.Fragment>
      <div className="sidebar">
        <Sidebar />
      </div>
      <header className="header">
        <Header />
      </header>
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
