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

import { DefaultImg } from "../../assets";

export type TreeNode = {
    type: 'node';
    img: string;
    name: string;
    level: number;
    color: string;
    children: Tree[];
  };
  export type TreeLeaf = {
    type: 'leaf';
    img: string;
    name: string;
    level: number;
    color: string;
  };
  
  export type Tree = TreeNode | TreeLeaf;
  
  export const data: Tree = {
    type: 'node',
    img: DefaultImg,
    name: "boss",
    level: 2300,
    color: "#B794F4",
    children: [
      {type: 'leaf', img: SkillJava,  name: "Java", level: 75,  color: "#B794F4" },
      {type: 'leaf', img: SkillCplusplus, name: "C++", level: 60,  color: "#B794F4" }]
  }
  
  