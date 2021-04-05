import React from "react";
import TitleContainer from "./TitleContainer";

interface Props {
  titles: String[];
  subMenu: String[];
  components: React.ElementType[];
}

const Layout = ({ titles, subMenu }: Props) => {
  return (
    <div className='flex w-full mt-18 h-screen80'>
      <TitleContainer titles={titles} subMenu={subMenu} />
      <div>anycomponent</div>
    </div>
  );
};

export default Layout;
