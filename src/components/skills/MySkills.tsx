import "./MySkills.css";

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
} from "../../assets/skills";

import { ChartLine, ChartCircle } from "../../assets/charts";

function MySkills() {
  const currentSkills = [
    { img: SkillReact, alt: "React" },
    { img: SkillHtml, alt: "HTML" },
    { img: SkillCss, alt: "CSS" },
    { img: SkillVscode, alt: "Visual Studio Code" },
    { img: SkillJava, alt: "Java" },
    { img: SkillIntellij, alt: "IntelliJ" },
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

  const firstskillsSections = {
    Sprachen: skillsLanguage,
    IDEs: skillsIDE,
  };

  const secondskillsSections = {
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
          const r = Math.min(39 + skill.level, 255); //Farbwerte von var(--mint-300)
          const g = Math.min(61 + skill.level, 255);
          const b = Math.min(73 + skill.level, 255);

          const gradientStyle = {
            backgroundImage: `linear-gradient(to right, var(--mint-300), rgba(${r}, ${g}, ${b}, 1))`,
          };

          return (
            <div className="skill-rowskill-row" key={skill.img}>
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

  return (
    <div className="block" id="myskills">
      <div id="myskills-header">
        <h2>Meine Skills</h2>
        <div className="button-wrapper">
          <button id="button-lines">
            <img src={ChartLine} alt={"Linien"} title={"Linien"} />
          </button>
          <button id="button-circles">
            <img src={ChartCircle} alt={"Kreis"} title={"Kreis"} />
          </button>
        </div>
      </div>
      <div id="skills">
        <div className="skills-box" id="first-skills-box">
          {Object.entries(firstskillsSections).map(([category, skillList]) =>
            renderSkillCategorySection(category, skillList)
          )}
        </div>
        <div className="skills-box">
          {Object.entries(secondskillsSections).map(([category, skillList]) =>
            renderSkillCategorySection(category, skillList)
          )}
        </div>
      </div>
      <p className="description">Kürzlich verwendete Technologien</p>
      <div id="mycurrentskills-skills">
        {currentSkills.map((skill) => (
          <div className="mycurrentskills-wrapper" key={skill.img}>
            <img src={skill.img} alt={skill.alt} title={skill.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySkills;
