import "./Home.css";

import React, { useState, useEffect } from "react";

import {
  Header,
  Footer,
  MainContent,
  Box,
  TypingText,
  ResponsiveSlider,
  Dialog,
  CardSlider,
} from "../components";

import {
  SkillAngular,
  SkillCplusplus,
  SkillCss,
  SkillHtml,
  SkillIntellij,
  SkillJava,
  SkillJs,
  SkillPhp,
  SkillPostgres,
  SkillPython,
  SkillReact,
  SkillVscode,
} from "../assets/skills";

import {
  Bachelor,
  Teamspace,
  TeamspaceCover,
  OwnWebsite,
} from "../assets/projects";

import { DefaultImg } from "../assets";

function Home() {
  const shortSkill = [
    { img: SkillJava, alt: "Java" },
    { img: SkillJs, alt: "JavaScript" },
    { img: SkillHtml, alt: "HTML" },
    { img: SkillCss, alt: "CSS" },
    { img: SkillReact, alt: "React" },
    { img: SkillIntellij, alt: "IntelliJ" },
    { img: SkillVscode, alt: "Visual Studio Code" },
  ];

  const skills = [
    { img: SkillJs, alt: "JavaScript" },
    { img: SkillHtml, alt: "HTML" },
    { img: SkillReact, alt: "React" },
    { img: SkillCss, alt: "CSS" },
    { img: SkillVscode, alt: "Visual Studio Code" },
    { img: SkillJava, alt: "Java" },
    { img: SkillIntellij, alt: "IntelliJ" },
    { img: SkillPostgres, alt: "PostgreSQL" },
    { img: SkillPython, alt: "Python" },
    { img: SkillAngular, alt: "Angular" },
    { img: SkillCplusplus, alt: "C++" },
    { img: SkillPhp, alt: "PHP" },
  ];

  interface Project {
    img: string;
    title: string;
    description: string;
  }

  const projects = [
    {
      cover: OwnWebsite,
      img: OwnWebsite,
      title: "Eigene Webseite",
      description: "Digitale Visitenkarte...",
      challenge:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      solution:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
      technologies: "Test",
      year: "2023",
    },
    {
      cover: Bachelor,
      img: Bachelor,
      title: "Bachelorarbeit",
      description: "Vordergrundsegmentierung mittels Optical Flow...",
      challenge:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      solution:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
      technologies: "Test",
      year: "2023",
    },
    {
      cover: TeamspaceCover,
      img: Teamspace,
      title: "Arbeitsprojekt",
      description: "Entwicklung der ERP-Software...",
      challenge:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      solution:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
      technologies: "Test",
      year: "2023",
    },
    {
      cover: DefaultImg,
      img: DefaultImg,
      title: "Leer",
      description: "Leer...",
      challenge:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      solution:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
      technologies: "Test",
      year: "2023",
    },
    {
      cover: DefaultImg,
      img: DefaultImg,
      title: "Leer",
      description: "Leer...",
      challenge:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      solution:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
      technologies: "Test",
      year: "2023",
    },
    {
      cover: DefaultImg,
      img: DefaultImg,
      title: "Leer",
      description: "Leer...",
      challenge:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      solution:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
      technologies: "Test",
      year: "2023",
    },
  ];

  const renderProject = (project: Project) => {
    if (!project || !project.title) {
      return <div>Error: Projekt nicht gefunden</div>;
    }

    return (
      <div className="project">
        <div className="label">
          <h3>{project.title}</h3>
          <p className="txt">{project.description}</p>
        </div>
        <img src={project.img} alt={project.title} title={project.title} />
        <div className="button-wrapper">
          <div className="line-wrapper">
            <div className="line"></div>
          </div>
          <button>Explore</button>
        </div>
      </div>
    );
  };

  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);

  const openDialogForProject = (projectIndex: number) => {
    setSelectedProjectIndex(projectIndex);
    openDialog();
  };

  return (
    <div>
      <Header />
      <MainContent>
        <Box id="home-entryheader">
          <div>
            <p id="first">Hey there,</p>
            <p id="second">I'm a </p>
            <div id="third">
              <p>Full Stack</p>
              <p>Software</p>
              <p>
                Developer<span id="point">&#9632;</span>
              </p>
            </div>
            <TypingText id="typingtxt" element="h1" speed={70}>
              Turning Ideas into Reality
            </TypingText>
          </div>
        </Box>
        <Box id="shorts">
          <div className="shortsbox" id="box-first">
            <div className="numbers">
              <p>{">"}1,5</p>
            </div>
            <div className="numbers-txt">
              <p>Jahre</p>
              <p>Erfahrung</p>
            </div>
          </div>
          <div className="shortsbox">
            <div className="numbers">
              <p>12</p>
            </div>
            <div className="numbers-txt">
              <p>Verschiedene</p>
              <p>Projekte</p>
            </div>
          </div>
          <div className="shortsbox" id="skillsicons">
            {shortSkill.map((skill, index) => (
              <div
                className="shortsbox-skill-wrapper"
                id={index === 0 ? "shortsbox-skill-wrapper-first" : undefined}
                key={skill.img}
              >
                <img src={skill.img} alt={skill.alt} title={skill.alt} />
              </div>
            ))}
          </div>
          <div className="shortsbox" id="skillsicons-alternative">
            <div className="numbers">
              <p>{">"}15</p>
            </div>
            <div className="numbers-txt">
              <p>Frameworks &</p>
              <p>Technologien</p>
            </div>
          </div>
        </Box>
        <Box id="home-content">
          <div className="content-row">
            <div className="block" id="aboutme">
              <h2>Über mich</h2>
              <p className="description">
                Als Full Stack Entwickler mit Expertise im gesamten
                Entwicklungszyklus realisiere ich technisch anspruchsvolle und
                benutzerfreundliche Lösungen. Mein Hauptziel liegt auf
                erstklassiger Nutzererfahrung und der Integration neuester
                Technologien. Darüber hinaus suche ich ständig nach
                Gelegenheiten, um meine Fähigkeiten zu vertiefen und mich
                weiterzuentwickeln.
              </p>
            </div>
          </div>
          <div className="content-row">
            <div className="block" id="myskills">
              <h2>Meine Skills</h2>
              <p className="description">Kürzlich verwendete Technologien</p>
              <div id="skills">
                {skills.map((skill) => (
                  <div className="skill-wrapper" key={skill.img}>
                    <img src={skill.img} alt={skill.alt} title={skill.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="content-row">
            <div id="myprojects">
              <h2>Meine Projekte</h2>
              <p className="description">
                Einige Projekte, die ich bisher entwickelt habe
              </p>
              <ResponsiveSlider>
                {projects.map((project, index) => (
                  <div className="slider-item" key={`project-${index}`}>
                    <div className="overlay-content" key={project.title}>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <button onClick={() => openDialogForProject(index)}>
                        Erfahre mehr &gt;
                      </button>
                    </div>
                    <div className="overlay-img">
                      <img
                        src={project.cover}
                        alt={project.title}
                        title={project.title}
                      />
                    </div>
                  </div>
                ))}
              </ResponsiveSlider>
            </div>
          </div>
          {/*  
          <div className="content-row" id="projectblock">
            <div id="projectheader">
              <div id="projectnav">
                <p id="all">Alle</p>
                <p id="work">Arbeit</p>
                <p id="study">Studium</p>
                <p id="diploma">Abschluss</p>
              </div>
            </div>
            <div id="list">
              {Array.from(
                { length: Math.ceil(projects.length / 2) },
                (_, rowIndex) => (
                  <div className="row" key={rowIndex}>
                    {[1, 2].map((side) => {
                      const projectIndex = rowIndex * 2 + side - 1;
                      return projectIndex < projects.length ? (
                        <div
                          key={side}
                          className={`project-wrapper-${
                            side === 1 ? "left" : "right"
                          }`}
                        >
                          {renderProject(projects[projectIndex])}
                        </div>
                      ) : (
                        <div className="project-wrapper-right">
                          <div className="project"></div>
                        </div>
                      );
                    })}
                  </div>
                )
              )}
            </div>
          </div>
*/}
        </Box>
      </MainContent>
      <Footer />
      <div id="dialog-root">
        {isDialogOpen && (
          <Dialog
            isOpen={isDialogOpen}
            onClose={closeDialog}
            selectedProjectIndex={selectedProjectIndex}
            projects={projects}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
