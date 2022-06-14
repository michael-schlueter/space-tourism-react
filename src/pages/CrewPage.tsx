import React from 'react'
import { NavBar } from '../components/NavBar'
import { useParams, useNavigate } from 'react-router-dom';
import data from "../data.json";
import ansariImageWebp from "../assets/crew/image-anousheh-ansari.webp";
import ansariImagePng from "../assets/crew/image-anousheh-ansari.png";
import hurleyImageWebp from "../assets/crew/image-douglas-hurley.webp";
import hurleyImagePng from "../assets/crew/image-douglas-hurley.png";
import shuttleworthImageWebp from "../assets/crew/image-mark-shuttleworth.webp";
import shuttleworthImagePng from "../assets/crew/image-mark-shuttleworth.png";
import gloverImageWebp from "../assets/crew/image-victor-glover.webp";
import gloverImagePng from "../assets/crew/image-victor-glover.png";

export const CrewPage = () => {

  let params = useParams();
  let navigate = useNavigate();
  let crewId;

  if (params.crewId) {
    crewId = parseInt(params.crewId);
  } else {
    return (
      <h1>Id not found</h1>
    )
  }

  let imageId, imageWebp, imagePng, hurleyActive, shuttleworthActive, gloverActive, ansariActive;

  if (crewId === 0) {
    imageId = "hurley-image";
    imageWebp = hurleyImageWebp;
    imagePng = hurleyImagePng;
    hurleyActive = true;
  } else if (crewId === 1) {
    imageId = "shuttleworth-image";
    imageWebp = shuttleworthImageWebp;
    imagePng = shuttleworthImagePng;
    shuttleworthActive = true;
  } else if (crewId === 2) {
    imageId = "glover-image";
    imageWebp = gloverImageWebp;
    imagePng = gloverImagePng;
    gloverActive = true;
  } else {
    imageId = "ansari-image";
    imageWebp = ansariImageWebp;
    imagePng = ansariImagePng;
    ansariActive = true;
  }

  return (
    <div className='wrapper crew'>
      <a className="skip-to-content" href="#main">Skip to content</a>
    <NavBar />

    <main id="main" className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>

      <div className="dot-indicators flex" role="tablist" aria-label="crew member list">
        <button aria-selected={hurleyActive} aria-controls="commander-tab" role="tab" data-image="commander-image" tabIndex={0} onClick={() => navigate("../0")}>
          <span className="sr-only">The commander</span>
        </button>
        <button aria-selected={shuttleworthActive} aria-controls="mission-tab" role="tab" data-image="mission-image" tabIndex={-1} onClick={() => navigate("../1")}>
          <span className="sr-only">The mission specialist</span>
        </button>
        <button aria-selected={gloverActive} aria-controls="pilot-tab" role="tab" data-image="pilot-image" tabIndex={-1} onClick={() => navigate("../2")}>
          <span className="sr-only">The pilot</span>
        </button>
        <button aria-selected={ansariActive} aria-controls="engineer-tab" role="tab" data-image="engineer-image" tabIndex={-1} onClick={() => navigate("../3")}>
          <span className="sr-only">The crew engineer</span>
        </button>
      </div>

      <article className="crew-details flow" id="commander-tab" role="tabpanel" tabIndex={0}>
        <header className="flow flow--space-small">
        <h2 className="fs-600 ff-serif uppercase">{data.crew[crewId].role}</h2>
        <p className="fs-700 uppercase ff-serif">{data.crew[crewId].name}</p>
        </header>
        <p>
          {data.crew[crewId].bio}
        </p>
      </article>
          
      <picture id={imageId}>
        <source srcSet={imageWebp} type="image/webp" />
        <img src={imagePng} alt="Douglas Hurley" />
      </picture>
    </main>
    </div>
  )
}