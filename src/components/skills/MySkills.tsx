import "./MySkills.css";

import React, { useState, ReactNode, useEffect } from "react";

import BubbleChart from "./BubbleChart";
import { data, Tree } from "./data";

import { DefaultImg } from "../../assets";

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
    color: string;
  }

  const colorLanguage = "#0094F4";
  const colorIde = "#B7FFFF";
  const colorDb = "#222222";
  const colorFramework = "#B794F4";
  const colorStyle = "#000000";
  const colorOther = "#FFFFFF";

  const skills: Record<string, Skill[]> = {
    language: [
      { img: SkillJava, alt: "Java", level: 75, color: colorLanguage },
      { img: SkillCplusplus, alt: "C++", level: 60, color: colorLanguage },
      { img: SkillPython, alt: "Python", level: 40, color: colorLanguage },
      { img: SkillJs, alt: "JavaScript", level: 30, color: colorLanguage },
      { img: SkillHtml, alt: "HTML", level: 90, color: colorLanguage },
      { img: SkillPhp, alt: "PHP", level: 15, color: colorLanguage },
    ],
    ide: [
      {
        img: SkillVscode,
        alt: "Visual Studio Code",
        level: 75,
        color: colorIde,
      },
      { img: SkillIntellij, alt: "IntelliJ", level: 80, color: colorIde },
    ],
    db: [{ img: SkillPostgres, alt: "PostgreSQL", level: 60, color: colorDb }],
    framework: [
      { img: SkillReact, alt: "React", level: 60, color: colorFramework },
      { img: SkillAngular, alt: "Angular", level: 30, color: colorFramework },
    ],
    style: [
      { img: SkillCss, alt: "CSS", level: 75, color: colorStyle },
      { img: SkillSass, alt: "SCSS", level: 40, color: colorStyle },
    ],
    other: [{ img: SkillOpenCV, alt: "OpenCV", level: 30, color: colorOther }],
  };

  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonClick = (button: string | null) => {
    setSelectedButton(button);
  };

  const contentForChartLines = (): ReactNode => {
    return (
      <div>
        {Object.entries(skills).map(([category, categorySkills]) => (
          <div key={category}>
            {categorySkills.map((skill) => {
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
        ))}
      </div>
    );
  };

  const mapSkillsToTree = (skill: Skill): Tree => {
    return {
      type: "leaf",
      img: skill.img,
      name: skill.alt,
      level: skill.level,
      color: skill.color,
    };
  };

  const createBubbleChartData = (): Tree => {
    const selectedSkills: Skill[] = Object.values(skills).flat();
    const childrenNodes: Tree[] = selectedSkills.map(mapSkillsToTree);

    return {
      type: "node",
      img: DefaultImg,
      name: "boss",
      level: 100,
      color: "#B794F4",
      children: childrenNodes,
    };
  };

  const contentForChartCircles = (): ReactNode => {
    return (
      <div className="chartCircle">
        <div>
          <BubbleChart
            data={createBubbleChartData()}
            width={400}
            height={400}
          />
        </div>
      </div>
    );
  };

  const renderSkillSection = (): ReactNode => {
    if (selectedButton === "button-lines") {
      return contentForChartLines();
    } else if (selectedButton === "button-circles") {
      return contentForChartCircles();
    } else {
      return null;
    }
  };

  return (
    <div className="block" id="myskills">
      <div id="myskills-header">
        <h2>Meine Skills</h2>
        <div className="button-wrapper">
          <button onClick={() => handleButtonClick("button-lines")}>
            <img src={ChartLine} alt={"Linien"} title={"Linien"} />
          </button>
          <button onClick={() => handleButtonClick("button-circles")}>
            <img src={ChartCircle} alt={"Kreis"} title={"Kreis"} />
          </button>
        </div>
      </div>
      <div id="skills">
        <div className="skills-box" id="first-skills-box">
          <div className="skill-category">
            <p className="category-title">"category":</p>
            {renderSkillSection()}
          </div>
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
