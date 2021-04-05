import React from "react";
import Layout from "../containers/Layout";

const AboutMe = () => {
  return (
    <Layout
      titles={["about", "me"]}
      subMenu={["Introduce", "Skills & Experience", "Contact"]}
      components={[]}
    />
  );
};

export default AboutMe;
