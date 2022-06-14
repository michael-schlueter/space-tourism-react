import React from "react";
import { NavBar } from "../components/NavBar";
import data from "../data.json";
import { useParams, useNavigate } from "react-router-dom";
import LaunchVehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import LaunchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import SpaceCapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import SpaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import SpaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import SpaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";

export const TechnologyPage = () => {

  let params = useParams();
  let technologyId = parseInt(params.technologyId);

  let navigate = useNavigate();

  let imageId, technologyLandscape, technologyPortrait, vehicleActive, spaceportActive, capsuleActive;

  if (technologyId === 0) {
    imageId = "launch-image";
    technologyLandscape = LaunchVehicleLandscape;
    technologyPortrait = LaunchVehiclePortrait;
    vehicleActive = true;
  } else if (technologyId === 1) {
    imageId = "spaceport-image";
    technologyLandscape = SpaceportLandscape;
    technologyPortrait = SpaceportPortrait;
    spaceportActive = true;
  } else {
    imageId = "capsule-image";
    technologyLandscape = SpaceCapsuleLandscape;
    technologyPortrait = SpaceCapsulePortrait;
    capsuleActive = true;
  }

  return (
    <div className="wrapper technology">
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <NavBar />

      <main
        id="main"
        className="grid-container grid-container--technology flow"
      >
        <h1 className="numbered-title">
          <span aria-hidden="true">03</span> Space Launch 101
        </h1>

        <picture id="launch-image">
          <img
            src={technologyLandscape}
            alt="launch vehicle mobile tablet"
            className="technology-img-mobile"
            id={imageId}
          />

          <img
            src={technologyPortrait}
            alt="launch vehicle desktop"
            className="technology-img-desktop"
            id={imageId}
          />
        </picture>

        <div
          className="number-indicators flex"
          role="tablist"
          aria-label="list of technologies"
        >
          <button
            className="text-white ff-serif fs-600 bg-dark"
            aria-selected={vehicleActive}
            aria-controls="launch-tab"
            role="tab"
            tabIndex={0}
            data-image="launch-image"
            onClick={() => navigate('../0')}
          >
            1
          </button>
          <button
            className="text-white ff-serif fs-600 bg-dark"
            aria-selected={spaceportActive}
            aria-controls="spaceport-tab"
            role="tab"
            tabIndex={-1}
            data-image="spaceport-image"
            onClick={() => navigate('../1')}
          >
            2
          </button>
          <button
            className="text-white ff-serif fs-600 bg-dark"
            aria-selected={capsuleActive}
            aria-controls="capsule-tab"
            role="tab"
            tabIndex={-1}
            data-image="capsule-image"
            onClick={() => navigate('../2')}
          >
            3
          </button>
        </div>

        <article
          className="technology-details flow"
          id="launch-tab"
          role="tabpanel"
          tabIndex={0}
        >
          <header className="flow flow--space-small">
            <h2 className="fs-600 text-accent ff-sans-cond letter-spacing-2 uppercase">
              The terminology...
            </h2>
            <p className="fs-700 uppercase ff-serif">{data.technology[technologyId].name}</p>
          </header>
          <p className="text-accent p-50ch">
            {data.technology[technologyId].description}
          </p>
        </article>
      </main>
    </div>
  );
};
