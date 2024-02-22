import React from "react";
import "./Navbar.css";
import logo from "./Assets/logo.png";
import cart_icon from "../components/Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Nav-logo">
        <img src={logo} alt="noImage" />
      </div>
      <ul className="Nav-menu">
        <li>
          <Link id="link" to="/">
            SHOP
          </Link>
        </li>
        <li>
          <Link id="link" to="/mens">
            MEN
          </Link>
        </li>
        <li>
          <Link id="link" to="/womens">
            WOMEN
          </Link>
        </li>
        <li>
          <Link id="link" to="kids">
            KIDS
          </Link>
        </li>
      </ul>
      <div className="login-cart">
        <Link to="/cart">
          <img src={cart_icon} alt="Cartimage" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
