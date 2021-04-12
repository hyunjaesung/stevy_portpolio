import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import worksData from "../worksData";

const CardList = () => {
  return (
    <div className='overflow-hidden slide-in-blurred-top w-full grid grid-flow-col grid-cols-2 content-center justify-items-center justify-center items-center mb-percent20'>
      {worksData.map(({ color, title, subTitle, thumbnail }, index) => (
        <Link key={title + subTitle} to={`/works/${index + 1}`}>
          <Card
            thumbnail={thumbnail}
            color={color}
            title={title}
            subTitle={subTitle}
          />
        </Link>
      ))}
    </div>
  );
};

export default CardList;
