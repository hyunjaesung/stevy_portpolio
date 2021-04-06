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
      <div>{components[0]}</div>
    </div>
  );
};

export default Layout;
