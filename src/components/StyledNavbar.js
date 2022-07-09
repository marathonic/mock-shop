import React from "react";
import { NavLink } from "react-router-dom";

const StyledNavbar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Products
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Login
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Cart
      </NavLink>
    </div>
  );
};

export default StyledNavbar;
