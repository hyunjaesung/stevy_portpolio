import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import TitleContainer from "./TitleContainer";

interface Props {
  titles: String[];
  subMenu: String[];
  components: React.ReactElement[];
  titleSize?: string;
}

const Layout = ({ titles, titleSize = "", subMenu, components }: Props) => {
  const [curIdx, setCurIdx] = useState(0);
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const handleClickButton = (index: number) => {
    setCurIdx(index);
  };
  return (
    <div className='flex w-full h-screen80 p-20'>
      {id !== undefined && (
        <div
          className='w-14 h-14 absolute cursor-pointer hover:opacity-50'
          onClick={() => {
            history.goBack();
          }}>
          <img
            style={{ width: "60px", height: "70px" }}
            src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjExNyAxMmw3LjUyNyA2LjIzNS0uNjQ0Ljc2NS05LTcuNTIxIDktNy40NzkuNjQ1Ljc2NC03LjUyOSA2LjIzNmgyMS44ODR2MWgtMjEuODgzeiIvPjwvc3ZnPg=='></img>
        </div>
      )}

      <TitleContainer
        titles={titles}
        titleSize={titleSize}
        subMenu={subMenu}
        curIdx={curIdx}
        handleClickButton={handleClickButton}
      />
      <div className='w-full pr-20 overflow-hidden'>
        <section className='flex flex-col justify-center items-center h-full ml-28 w-full'>
          {components.length > 0 && components[curIdx]}
        </section>
      </div>
    </div>
  );
};

export default Layout;
