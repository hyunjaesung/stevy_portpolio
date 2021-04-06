import React, { useState } from "react";
import TitleContainer from "./TitleContainer";

interface Props {
  titles: String[];
  subMenu: String[];
  components: React.ReactElement[];
}

const Layout = ({ titles, subMenu, components }: Props) => {
  const [curIdx, setCurIdx] = useState(0);
  const handleClickButton = (index: number) => {
    setCurIdx(index);
  };
  return (
    <div className='flex w-full h-screen80 p-20'>
      <TitleContainer
        titles={titles}
        subMenu={subMenu}
        curIdx={curIdx}
        handleClickButton={handleClickButton}
      />
      <div>
        <section className='h-full ml-28 mt-20'>{components[0]}</section>
      </div>
    </div>
  );
};

export default Layout;
