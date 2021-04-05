import React, { useState } from "react";

interface Props {
  titles: String[];
  subMenu: String[];
}

const TitleContainer = ({ titles, subMenu }: Props) => {
  const [curIdx, setCurIdx] = useState(0);
  const handleClickButton = (index: number) => {
    setCurIdx(index);
  };

  return (
    <div className='mt-percent20 w-3/12 m-10'>
      <div className='flex flex-col '>
        {titles.map((title) => (
          <span className='w-full font-bold text-8xl text-right'>{title}</span>
        ))}
      </div>
      <div className='flex flex-col mt-20'>
        {subMenu.map((menu, index) => (
          <button
            className={`transition duration-300 ease-in-out hover:opacity-90 focus:outline-none text-right mt-3 text-2xl opacity-${
              index === curIdx ? 90 : 50
            }`}
            onClick={() => {
              handleClickButton(index);
            }}>
            {menu}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TitleContainer;
// 광주광역시 북구 호동로 37-4 (중흥동, 토마토하우스) 305호
