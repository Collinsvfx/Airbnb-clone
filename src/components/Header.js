import React from "react";
import Logo from "../images/airbnb 1.png";

export default function Headers() {
  return (
    <div className="header">
      <nav className="navbar-area">
        <img alt="" src={Logo} className="the-logo" />
      </nav>
    </div>
  );
}
