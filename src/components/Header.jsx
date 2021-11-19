import React from "react";
import Home from "../icons/Home";
import "../styling/_header.scss";

const Header = () => {
  return (
    <div className="header blue-hover">
      <span className="icon">
        <Home />
      </span>
      <p>Welcome</p>
    </div>
  );
};

export default Header;
