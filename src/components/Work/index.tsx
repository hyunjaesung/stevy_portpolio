import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../containers/Layout";
import worksData from "../worksData";
import WorkItem from "./WorkItem";

const Work = () => {
  let { id } = useParams<{ id: string }>();
  const data = worksData[+id - 1];

  return (
    <Layout
      titles={data.title}
      titleSize='text-6xl'
      subMenu={[]}
      components={[<WorkItem data={data} />]}
    />
  );
};

export default Work;
