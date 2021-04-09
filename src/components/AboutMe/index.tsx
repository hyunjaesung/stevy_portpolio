import React from "react";
import Layout from "../../containers/Layout";
import Introduce from "./Introduce";
import Skill from "./Skill";

const AboutMe = () => {
  return (
    <Layout
      titles={["about", "me"]}
      subMenu={["introduce & contact", "skills & experience"]}
      components={[<Introduce />, <Skill />]}
    />
  );
};

export default AboutMe;
