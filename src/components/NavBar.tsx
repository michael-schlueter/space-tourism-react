import React, { useState } from "react";
import SpaceTourismLogo from "../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const [showHamburgerButton, setShowHamburgerButton] = useState(false);
  const [showSideNavigation, setShowSideNavigation] = useState(false);

  const handleClick = () => {
    if (showSideNavigation === false) {
      setShowHamburgerButton(true);
      setShowSideNavigation(true);
    } else {
      setShowHamburgerButton(false);
      setShowSideNavigation(false);
    }
  };

  return (
    <header className="primary-header flex">
      <div>
        <img src={SpaceTourismLogo} alt="space tourism logo" className="logo" />
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={showHamburgerButton}
        onClick={handleClick}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          data-visible={showSideNavigation}
          className="primary-navigation underline-indicators flex"
        >
            <NavLink
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/"
            >
              <li>
              <span aria-hidden="true">01</span>Home
              </li>
            </NavLink>
          
          <NavLink
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/destination/0"
            >
              <li>
              <span aria-hidden="true">02</span>Destination
              </li>
            </NavLink>
          
          <NavLink
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/crew/0"
            >
              <li>
              <span aria-hidden="true">03</span>Crew
              </li>
            </NavLink>
          
          
            <NavLink
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/technology/0"
            >
              <li>
              <span aria-hidden="true">04</span>Technology
              </li>
            </NavLink>
          
        </ul>
      </nav>
    </header>
  );
};
