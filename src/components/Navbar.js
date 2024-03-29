import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Pulido De Pisos de Madera Mármol y Granito en Bogota - Celular 304 277 5545" style={{ width: "88px" }} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul id="navMenu" className={` navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
            {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
            <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/pulido-pisos-madera-servicio-precio-m2">
              Madera
            </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="/pulido-pisos-marmol">
                Mármol
              </Link>
            </li>          
            <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/pulido-pisos-granito">
              Granito
            </Link>
            </li>
         
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
