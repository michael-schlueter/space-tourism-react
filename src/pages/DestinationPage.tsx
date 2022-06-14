import React from "react";
import data from "../data.json";
import { NavBar } from "../components/NavBar";
import { useParams, useNavigate } from "react-router-dom";
import MoonImagePng from "../assets/destination/image-moon.png";
import MoonImageWebp from "../assets/destination/image-moon.webp";
import MarsImagePng from "../assets/destination/image-mars.png";
import MarsImageWebp from "../assets/destination/image-mars.webp";
import EuropaImagePng from "../assets/destination/image-europa.png";
import EuropaImageWebp from "../assets/destination/image-europa.webp";
import TitanImagePng from "../assets/destination/image-titan.png";
import TitanImageWebp from "../assets/destination/image-titan.webp";

export const DestinationPage = () => {
  let params = useParams();
  let navigate = useNavigate();
  let destinationId;

  if (params.destinationId) {
    destinationId = parseInt(params.destinationId);
  } else {
    return <h1>Id not found</h1>;
  }

  let imageId,
    imageWebp,
    imagePng,
    moonActive,
    marsActive,
    europaActive,
    titanActive;

  if (destinationId === 0) {
    imageId = "moon-image";
    imageWebp = MoonImageWebp;
    imagePng = MoonImagePng;
    moonActive = true;
  } else if (destinationId === 1) {
    imageId = "mars-image";
    imageWebp = MarsImageWebp;
    imagePng = MarsImagePng;
    marsActive = true;
  } else if (destinationId === 2) {
    imageId = "europa-image";
    imageWebp = EuropaImageWebp;
    imagePng = EuropaImagePng;
    europaActive = true;
  } else {
    imageId = "titan-image";
    imageWebp = TitanImageWebp;
    imagePng = TitanImagePng;
    titanActive = true;
  }

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

        <picture id={imageId}>
          <source srcSet={imageWebp} type="image/webp" />
          <img src={imagePng} alt={data.destinations[destinationId].name} />
        </picture>

        <div
          className="tab-list underline-indicators flex"
          role="tablist"
          aria-label="destination list"
        >
          <button
            aria-selected={moonActive}
            role="tab"
            aria-controls="moon-tab"
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            tabIndex={0}
            data-image="moon-image"
            onClick={() => navigate("../0")}
          >
            Moon
          </button>
          <button
            aria-selected={marsActive}
            role="tab"
            aria-controls="mars-tab"
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            tabIndex={-1}
            data-image="mars-image"
            onClick={() => navigate("../1")}
          >
            Mars
          </button>
          <button
            aria-selected={europaActive}
            role="tab"
            aria-controls="europa-tab"
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            tabIndex={-1}
            data-image="europa-image"
            onClick={() => navigate("../2")}
          >
            Europa
          </button>
          <button
            aria-selected={titanActive}
            role="tab"
            aria-controls="titan-tab"
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            tabIndex={-1}
            data-image="titan-image"
            onClick={() => navigate("../3")}
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
          <h2 className="fs-800 uppercase ff-serif">
            {data.destinations[destinationId].name}
          </h2>

          <p>{data.destinations[0].description}</p>

          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="ff-serif uppercase">
                {data.destinations[destinationId].distance}
              </p>
            </div>
            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="ff-serif uppercase">
                {data.destinations[destinationId].travel}
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};
