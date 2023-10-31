import React from "react";
import "./CardsBachelor.css";

import { Bachelor } from "../../assets/projects";

import {
  SkillAngular,
  SkillCplusplus,
  SkillCss,
  SkillHtml,
  SkillIntellij,
  SkillJava,
  SkillJs,
  SkillOpenCV,
  SkillPhp,
  SkillPostgres,
  SkillPython,
  SkillReact,
  SkillVscode,
} from "../../assets/skills";

const skills = [
  { img: SkillPython, alt: "Python" },
  { img: SkillVscode, alt: "Visual Studio Code" },
  { img: SkillOpenCV, alt: "OpenCV" },
];

interface Props {
  id: string;
}

function CardsBachelor({ id }: Props) {
  const contents: Record<string, React.ReactNode> = {
    "card-1": (
      <>
        <div className="card-header">
          <h1>Bachelorarbeit</h1>
          <h1 className="createdAt">2023</h1>
        </div>
        <div className="card-content">
          <p className="description">
            Vordergrundsegmentierung mittels Optical Flow...
          </p>
          <img src={Bachelor} alt="Bachelorarbeit" title="Bachelorarbeit" />
          <div className="row">
            <div className="box">
              <h2>Herausforderung</h2>
              <p className="challenge">Herausforderung ist</p>
            </div>
            <div className="box right">
              <h2>Lösung</h2>
              <p className="solution">Lösung ist</p>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <h2>Technologien</h2>
              <div className="skills">
                {skills.map((skill) => (
                  <div className="skill-wrapper" key={skill.img}>
                    <img src={skill.img} alt={skill.alt} title={skill.alt} />
                    <p className="skill-title">{skill.alt}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="box right">
              <h2>Links</h2>
              <p className="linkttxt">
                Datengrundlage - basierend auf dem Panafrikanischen Programm:
              </p>
              <a href="http://panafrican.eva.mpg.de/" target="_blank">
                http://panafrican.eva.mpg.de/
              </a>
            </div>
          </div>
        </div>
      </>
    ),
    "card-2": (
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.", Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua.", Lorem ipsum dolor sit amet, consetetur
        sadipscing elLorem ipsum dolor sit amet, consetetur sadipscing elitr,
      </p>
    ),
    "card-3": (
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.", Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua.", Lorem ipsum dolor sit amet, consetetur
        sadipscing elLorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua.", Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua.", Lorem ipsum
        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.", Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua.", Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua.", Loritr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.", Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua.", Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua.", Lorem
      </p>
    ),
  };

  const selectedContent = contents[id];

  return <>{selectedContent}</>;
}

export default CardsBachelor;
