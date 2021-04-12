import React from "react";
import worksData from "../worksData";

interface Props {
  image: string;
  content: string;
}

const SimpleItemLayout = ({ image, content }: Props) => {
  return (
    <>
      <div
        className='slide-in-blurred-top w-full h-1/2 bg-no-repeat bg-center bg-cover mb-10 rounded-lg'
        style={{
          backgroundImage: `url("${image}")`,
        }}></div>
      <div className='slide-in-blurred-top'>
        <p className='text-xl'>{content}</p>
      </div>
    </>
  );
};

export default SimpleItemLayout;
