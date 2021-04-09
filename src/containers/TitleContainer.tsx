import React from "react";

interface Props {
  titles: String[];
  subMenu: String[];
  curIdx: number;
  titleSize: string;
  handleClickButton: (a: number) => void;
}

const TitleContainer = ({
  titles,
  subMenu,
  curIdx,
  titleSize,
  handleClickButton,
}: Props) => {
  return (
    <section className='mt-percent20 w-3/12'>
      <section className='flex flex-col'>
        {titles.map((title, index) => (
          <div
            key={index}
            className={`overflow-hidden w-full font-bold ${
              titleSize === "" ? "text-8xl" : titleSize
            } text-right`}>
            <div
              className={`title-animation ${titleSize === "" ? "" : "mt-7"}`}>
              {title}
            </div>
          </div>
        ))}
      </section>
      <div className='flex justify-end mb-16'>
        <div className='mt-8 w-1/2 border-black border-4 h-1 bg-black opacity-80'></div>
      </div>
      <section className='flex flex-col '>
        {subMenu.map((menu, index) => (
          <button
            key={index}
            className={`overflow-hidden transition duration-300 ease-in-out hover:opacity-90 focus:outline-none text-right mt-3 text-2xl opacity-${
              index === curIdx ? 90 : 50
            }`}
            onClick={() => {
              handleClickButton(index);
            }}>
            <div className='title-animation'>{menu}</div>
          </button>
        ))}
      </section>
    </section>
  );
};

export default TitleContainer;
