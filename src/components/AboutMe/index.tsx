import React from "react";
import Layout from "../../containers/Layout";
import Introduce from "./Introduce";

const AboutMe = () => {
  return (
    <Layout
      titles={["about", "me"]}
      subMenu={["Introduce", "Skills & Experience", "Contact"]}
      components={[<Introduce />]}
    />
  );
};

export default AboutMe;
