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

  let activeClassName =
    "active ff-sans-cond uppercase text-white letter-spacing-2";
  let inactiveClassName = "ff-sans-cond uppercase text-white letter-spacing-2";

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
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
            to="/"
            onClick={handleClick}
          >
            <li>
              <span aria-hidden="true">01</span>Home
            </li>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
            to="/destination"
            onClick={handleClick}
          >
            <li>
              <span aria-hidden="true">02</span>Destination
            </li>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
            to="/crew"
            onClick={handleClick}
          >
            <li>
              <span aria-hidden="true">03</span>Crew
            </li>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
            to="/technology"
            onClick={handleClick}
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
