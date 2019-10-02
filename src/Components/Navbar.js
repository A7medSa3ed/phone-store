import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ButtonContainer, NavWrapper } from "./StyledElements";
const Navbar = () => {
  return (
    <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="Logo" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <span style={{ marginRight: "10px" }}>
            <i className="fas fa-cart-plus" />
          </span>
          my Cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
};

export default Navbar;
