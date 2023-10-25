import React, { useState } from "react";

import "./Projects.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import Box from "../components/Box";

import { Bachelor, Teamspace, OwnWebsite } from "../assets/projects";

import { DefaultImg } from "../assets";
import { Wave } from "../assets/wave";

interface Props {
  heading: string;
  imageUrl: string;
  paragraphText: string;
  id: number;
}

const projects = [
  {
    img: OwnWebsite,
    title: "Eigene Webseite",
    description: "Digitale Visitenkarte...",
    id: 1,
  },
  {
    img: Bachelor,
    title: "Bachelorarbeit",
    description: "Vordergrundsegmentierung mittels Optical Flow...",
    id: 2,
  },
  {
    img: Teamspace,
    title: "Arbeitsprojekt",
    description: "Entwicklung der ERP-Software...",
    id: 3,
  },
  {
    img: DefaultImg,
    title: "Projekt 4",
    description: "Beschreibung für Projekt 3...",
    id: 4,
  },
  {
    img: DefaultImg,
    title: "Projekt 5",
    description: "Beschreibung für Projekt 4...",
    id: 5,
  },
  {
    img: DefaultImg,
    title: "Projekt 6",
    description: "Beschreibung für Projekt 4...",
    id: 6,
  },
  {
    img: DefaultImg,
    title: "Projekt 7",
    description: "Beschreibung für Projekt 4...",
    id: 7,
  },
  {
    img: DefaultImg,
    title: "Projekt 8",
    description: "Beschreibung für Projekt 4...",
    id: 8,
  },
  {
    img: DefaultImg,
    title: "Projekt 9",
    description: "Beschreibung für Projekt 4...",
    id: 9,
  },
  {
    img: DefaultImg,
    title: "Projekt 10",
    description: "Beschreibung für Projekt 4...",
    id: 10,
  },
];

function ProjectRowImgTxt({ heading, imageUrl, paragraphText, id }: Props) {
  return (
    <div className="project-row-img-txt" id={id.toString()}>
      <div className="column-img">
        <div className="project-content">
          <img src={imageUrl} alt="Project" />
        </div>
      </div>
      <div className="column-middle">
        <div className="line"></div>
        <div className="circle"></div>
      </div>
      <div className="column-txt">
        <div className="project-content">
          <h3>{heading}</h3>
          <p>{paragraphText}</p>
          <button>Mehr</button>
        </div>
      </div>
    </div>
  );
}

function ProjectRowTxtImg({ heading, imageUrl, paragraphText }: Props) {
  return (
    <div className="project-row-txt-img">
      <div className="column-txt">
        <div className="project-content">
          <h3>{heading}</h3>
          <p>{paragraphText}</p>
          <button>Mehr</button>
        </div>
      </div>
      <div className="column-middle">
        <div className="line"></div>
        <div className="circle"></div>
      </div>
      <div className="column-img">
        <div className="project-content">
          <img src={imageUrl} alt="Project" />
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <Header />
      <MainContent>
        <Box id="projects-content">
          <div id="header">
            <h2>Meine Projekte</h2>
          </div>
          <div id="projectlist">
            {projects.map((project, index) =>
              index % 2 === 0 ? (
                <ProjectRowImgTxt
                  key={index}
                  heading={project.title}
                  imageUrl={project.img}
                  paragraphText={project.description}
                  id={project.id}
                />
              ) : (
                <ProjectRowTxtImg
                  key={index}
                  heading={project.title}
                  imageUrl={project.img}
                  paragraphText={project.description}
                  id={project.id}
                />
              )
            )}
          </div>
        </Box>
      </MainContent>
      <Footer />
    </div>
  );
}

export default Projects;
