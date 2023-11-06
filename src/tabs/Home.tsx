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
  SkillSass,
  SkillOpenCV,
} from "../assets/skills";

import {
  Bachelor,
  Teamspace,
  TeamspaceCover,
  OwnWebsite,
} from "../assets/projects";

import { DefaultImg, Portrait } from "../assets";

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

  interface Skill {
    img: string;
    alt: string;
    level: number;
  }

  const skillsLanguage: Skill[] = [
    { img: SkillJava, alt: "Java", level: 75 },
    { img: SkillCplusplus, alt: "C++", level: 60 },
    { img: SkillPython, alt: "Python", level: 40 },
    { img: SkillJs, alt: "JavaScript", level: 30 },
    { img: SkillHtml, alt: "HTML", level: 90 },
    { img: SkillPhp, alt: "PHP", level: 15 },
  ];

  const skillsIDE: Skill[] = [
    { img: SkillVscode, alt: "Visual Studio Code", level: 75 },
    { img: SkillIntellij, alt: "IntelliJ", level: 80 },
  ];

  const skillsDB: Skill[] = [
    { img: SkillPostgres, alt: "PostgreSQL", level: 60 },
  ];

  const skillsJSFramework: Skill[] = [
    { img: SkillReact, alt: "React", level: 60 },
    { img: SkillAngular, alt: "Angular", level: 30 },
  ];

  const skillsStyle: Skill[] = [
    { img: SkillCss, alt: "CSS", level: 75 },
    { img: SkillSass, alt: "SCSS", level: 40 },
  ];

  const skillsOther: Skill[] = [{ img: SkillOpenCV, alt: "OpenCV", level: 30 }];

  const skillsSections = {
    Sprachen: skillsLanguage,
    IDEs: skillsIDE,
    Datenbank: skillsDB,
    Frameworks: skillsJSFramework,
    Stylesheets: skillsStyle,
    Andere: skillsOther,
  };

  const renderSkillCategorySection = (category: string, skills: Skill[]) => {
    const getMaxWidth = () => {
      // Hier kannst du die maximale Breite für den Farbverlauf festlegen
      return 100; // Beispiel: 100%
    };

    return (
      <div key={category} className="skill-category">
        <p className="category-title">{category}:</p>
        {skills.map((skill) => {
          const widthPercentage = skill.level * 2;

          const r = Math.min(64 + widthPercentage, 255); //Farbwerte von var(--mint-100)
          const g = Math.min(105 + widthPercentage, 255);
          const b = Math.min(124 + widthPercentage, 255);

          const gradientStyle = {
            backgroundImage: `linear-gradient(to right, var(--mint-100), rgba(${r}, ${g}, ${b}, 0.7))`,
          };

          return (
            <div className="skill-row" key={skill.img}>
              <div className="mainline">
                <div
                  className="skill-line"
                  style={{ width: `${skill.level}%`, ...gradientStyle }}
                >
                  <p>{skill.alt}</p>
                </div>
                <img src={skill.img} alt={skill.alt} title={skill.alt} />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  interface Project {
    img: string;
    title: string;
    description: string;
  }

  const projects = [
    {
      id: "OwnWebsite",
      cover: OwnWebsite,
      img: OwnWebsite,
      title: "Eigene Webseite",
      description: "Digitale Visitenkarte...",
      numSlides: 3,
    },
    {
      id: "Bachelor",
      cover: Bachelor,
      img: Bachelor,
      title: "Bachelorarbeit",
      description: "Vordergrundsegmentierung mittels Optical Flow...",
      numSlides: 3,
    },
    {
      id: "Teamspace",
      cover: TeamspaceCover,
      img: Teamspace,
      title: "Arbeitsprojekt",
      description: "Entwicklung der ERP-Software...",
      numSlides: 3,
    },
    {
      id: "DefaultProject",
      cover: DefaultImg,
      img: DefaultImg,
      title: "Leer",
      description: "Leer...",
      numSlides: 3,
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
          <div id="headertext">
            <p id="first">Hey there,</p>
            <p id="second">I'm a </p>
            <div id="third">
              <p>Full Stack</p>
              <p>Software</p>
              <p>
                Developer<span id="point">&#9632;</span>
              </p>
              <TypingText id="typingtxt" element="h1" speed={70}>
                Turning Ideas into Reality
              </TypingText>
            </div>
          </div>
          <img src={Portrait} />
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
              <p>{">"}12</p>
            </div>
            <div className="numbers-txt">
              <p>Verschiedene</p>
              <p>Technologien</p>
            </div>
          </div>
          <div className="shortsbox">
            <div className="numbers">
              <p>100%</p>
            </div>
            <div className="numbers-txt">
              <p>Die Richtige für</p>
              <p>Ihr Unternehmen</p>
            </div>
          </div>
          {/* 
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
          */}
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
            <div className="block" id="mycurrentskills">
              <h2>Meine Skills</h2>
            </div>
          </div>
          <div className="content-row">
            <div className="block" id="myskills">
              <h2>Meine Skills</h2>
              <p className="description">Kürzlich verwendete Technologien</p>
              <div id="mycurrentskills-skills">
                {skillsLanguage.map((skill) => (
                  <div className="mycurrentskills-wrapper" key={skill.img}>
                    <img src={skill.img} alt={skill.alt} title={skill.alt} />
                  </div>
                ))}
              </div>
              <div id="skills">
                {Object.entries(skillsSections).map(([category, skillList]) =>
                  renderSkillCategorySection(category, skillList)
                )}
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
