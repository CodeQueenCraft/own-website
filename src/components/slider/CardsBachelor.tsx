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
  SkillPhp,
  SkillPostgres,
  SkillPython,
  SkillReact,
  SkillVscode,
} from "../../assets/skills";

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
          <h2>Herausforderung</h2>
          <p className="challenge">Herausforderung ist</p>
          <h2>Lösung</h2>
          <p className="solution">Lösung ist</p>
          <h2>Technologien</h2>
          <div className="skills"></div>
          <h2>Links</h2>
          <p>Material der Organisation:</p>
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
