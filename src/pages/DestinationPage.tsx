import React from "react";
import data from '../data.json';
import { NavBar } from "../components/NavBar";
import MoonImagePng from "../assets/destination/image-moon.png"
import MoonImageWebp from "../assets/destination/image-moon.webp"
import MarsImagePng from "../assets/destination/image-moon.png"
import MarsImageWebp from "../assets/destination/image-moon.webp"
import EuropaImagePng from "../assets/destination/image-moon.png"
import EuropaImageWebp from "../assets/destination/image-moon.webp"
import TitanImagePng from "../assets/destination/image-moon.png"
import TitanImageWebp from "../assets/destination/image-moon.webp"

export const DestinationPage = () => {
  return (
    <div className="wrapper destination">
      {" "}
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <NavBar />
      <main
        id="main"
        className="grid-container grid-container--destination flow"
      >
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> Pick your destination
        </h1>

        <picture id="moon-image">
          <source
            srcSet={MoonImageWebp}
            type="image/webp"
          />
          <img src={MoonImagePng} alt={data.destinations[0].name} />
        </picture>

        <div
          className="tab-list underline-indicators flex"
          role="tablist"
          aria-label="destination list"
        >
          <button
            aria-selected="true"
            role="tab"
            aria-controls="moon-tab"
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            tabIndex={0}
            data-image="moon-image"
          >
            Moon
          </button>
          <button
            aria-selected="false"
            role="tab"
            aria-controls="mars-tab"
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            tabIndex={-1}
            data-image="mars-image"
          >
            Mars
          </button>
          <button
            aria-selected="false"
            role="tab"
            aria-controls="europa-tab"
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            tabIndex={-1}
            data-image="europa-image"
          >
            Europa
          </button>
          <button
            aria-selected="false"
            role="tab"
            aria-controls="titan-tab"
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            tabIndex={-1}
            data-image="titan-image"
          >
            Titan
          </button>
        </div>

        <article
          className="destination-info flow"
          id="moon-tab"
          tabIndex={0}
          role="tabpanel"
        >
          <h2 className="fs-800 uppercase ff-serif">{data.destinations[0].name}</h2>

          <p>
            {data.destinations[0].description}
          </p>

          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="ff-serif uppercase">{data.destinations[0].distance}</p>
            </div>
            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="ff-serif uppercase">{data.destinations[0].travel}</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};
