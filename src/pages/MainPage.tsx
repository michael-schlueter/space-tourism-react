import React from 'react'
import SpaceTourismLogo from "../assets/shared/logo.svg"

export const MainPage = () => {
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
      <button className="mobile-nav-toggle" aria-controls="primary-navigation"><span className="sr-only" aria-expanded="false">Menu</span></button>
      <nav>
        <ul id="primary-navigation" data-visible="false" className="primary-navigation underline-indicators flex">
          <li className="active">
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="index.html"
              ><span aria-hidden="true">00</span>Home</a
            >
          </li>
          <li>
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="destination.html"
              ><span aria-hidden="true">01</span>Destination</a
            >
          </li>
          <li>
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="crew.html"
              ><span aria-hidden="true">02</span>Crew</a
            >
          </li>
          <li>
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="technology.html"
              ><span aria-hidden="true">03</span>Technology</a
            >
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
        <a
          href="destination.html"
          className="large-button uppercase ff-serif text-dark bg-white"
          >Explore</a
        >
      </div>
    </main>
    </div>
  )
}
