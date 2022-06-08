import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SpaceTourismLogo from "../assets/shared/logo.svg"

export const MainPage = () => {

  const [showHamburgerButton, setShowHamburgerButton] = useState("false");
  const [showSideNavigation, setShowSideNavigation] = useState("false");

  const handleClick = () => {
    if (showSideNavigation === "false") {
      setShowHamburgerButton("true");
      setShowSideNavigation("true");
    } else {
      setShowHamburgerButton("false");
      setShowSideNavigation("false");
    }
  }

  return (
    <div className='wrapper home'>
        <a className="skip-to-content" href="#main">Skip to content</a>
    <header className="primary-header flex">
      <div>
        <img
          src={SpaceTourismLogo}
          alt="space tourism logo"
          className="logo"
        />
      </div>
      <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded={showHamburgerButton} onClick={handleClick}><span className="sr-only">Menu</span></button>
      <nav>
        <ul id="primary-navigation" data-visible={showSideNavigation} className="primary-navigation underline-indicators flex">
          <li className="active">
            <Link
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/"
              ><span aria-hidden="true">00</span>Home</Link>
          </li>
          <li>
            <Link
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/destination"
              ><span aria-hidden="true">01</span>Destination</Link>
          </li>
          <li>
            <Link
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/crew"
              ><span aria-hidden="true">02</span>Crew</Link>
          </li>
          <li>
            <Link
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/technology"
              ><span aria-hidden="true">03</span>Technology</Link>
          </li>
        </ul>
      </nav>
    </header>

    <main id="main" className="grid-container grid-container--home">
      <div>
        <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
          So, you want to travel to
          <span className="d-block fs-900 ff-serif text-white">Space</span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <Link
          to="destination"
          className="large-button uppercase ff-serif text-dark bg-white"
          >Explore</Link>
      </div>
    </main>
    </div>
  )
}
