import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import worksData from "../worksData";

const CardList = () => {
  return (
    <div className='overflow-scroll slide-in-blurred-top w-full flex flex-wrap justify-center items-center mb-percent20'>
      {worksData.map(({ image, color, title, subTitle }, index) => (
        <Link key={title + subTitle} to={`/works/${index + 1}`}>
          <Card image={image} color={color} title={title} subTitle={subTitle} />
        </Link>
      ))}
    </div>
  );
};

export default CardList;
