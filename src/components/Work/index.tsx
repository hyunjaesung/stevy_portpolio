import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../containers/Layout";
import worksData from "../worksData";
import SimpleItemLayout from "./SimpleItemLayout";

type TComponentFunc = (a: any) => React.ReactElement;
interface ISimpleItemLayout {
  image: string;
  content: string;
}

const components: { [index: string]: TComponentFunc } = {
  Simple: ({ image, content }: ISimpleItemLayout) => (
    <SimpleItemLayout image={image} content={content} />
  ),
};

const Work = () => {
  let { id } = useParams<{ id: string }>();
  const { title, componentType, image, content } = worksData[+id - 1];

  return (
    <Layout
      titles={title}
      titleSize='text-6xl'
      subMenu={[]}
      components={[components[componentType]({ image, content })]}
    />
  );
};

export default Work;
