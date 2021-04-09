import React from "react";
import Layout from "../../containers/Layout";
import CardList from "./CardList";

const Works = () => {
  return <Layout titles={["works"]} subMenu={[]} components={[<CardList />]} />;
};

export default Works;
