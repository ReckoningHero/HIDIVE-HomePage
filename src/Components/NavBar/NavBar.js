import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://static.hidive.com/content/images/HIDIVE_logo.svg" 
        alt="HIDIVE Logo"
      />
      <img
        className="avatar"
        src="https://i.pinimg.com/736x/50/08/87/50088797a9d955ba84acf8224aa4a519.jpg"
        alt="Avatar"
      />
    </div>
  );
}

export default NavBar;
