import React from "react";
import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <div className="top-bar-bg">
      <div className="top-bar">
        <NavLink className="logo" to="/">
          Fantasy Game Weapon Shop
        </NavLink>
        <nav className="navigation">
          <NavLink className="nav-item" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item" to="/shop">
            Shop
          </NavLink>
          <a className="nav-item" href="https://github.com/skaisanlahti">
            About
          </a>
        </nav>
        <div className="top-cart">
          <NavLink className="cart-link" to="/cart">
            Cart {props.cartItemCount}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
