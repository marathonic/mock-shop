import React from "react";
import MediaQuery from "react-responsive";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaInfo,
  FaStore,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";

const StyledNavbar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        <span>
          <span className="nav-text">Home</span>
          <span className="nav-icon">
            <FaHome />
          </span>
        </span>
      </NavLink>
      <MediaQuery query="(min-width: 1024px)">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <span>
            <span className="nav-text">About</span>
            <span className="nav-icon">
              <FaInfo />
            </span>
          </span>
        </NavLink>
      </MediaQuery>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        <span>
          <span className="nav-text">Products</span>
          <span className="nav-icon">
            <FaStore />
          </span>
        </span>
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        <span>
          <span className="nav-text">Login</span>
          <span className="nav-icon">
            <FaUser />
          </span>
        </span>
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        <span>
          <span className="nav-text">Cart</span>
          <span className="nav-icon">
            <FaShoppingCart />
          </span>
        </span>
      </NavLink>
    </div>
  );
};

export default StyledNavbar;
