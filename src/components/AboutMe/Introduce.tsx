import React from "react";
import introduceImage from "../../image/keyboard.jpg";
interface Props {}

const Introduce = (props: Props) => {
  return (
    <div className='w-full h-full mt-28'>
      <div
        className={`slide-in-blurred-top-gray w-full h-1/2 bg-no-repeat bg-center bg-cover mb-10 rounded-lg filter grayscale`}
        style={{
          backgroundImage: `url("${introduceImage}")`,
        }}></div>
      <div className='slide-in-blurred-top w-full h-1/2'>
        <p className='m-3 text-xl text-right opacity-70 tracking-wider leading-8'>
          안녕하세요
          <br />
          저는 성현제 입니다
          <br />
          web frontend 개발을 하고 있습니다
          <br />
          좋은 동료와 함께하고 싶습니다
          <br />
        </p>
        <p className='m-3 text-xl text-left opacity-70 tracking-wider leading-8'>
          contact : stevysung@gmail.com
          <br />
          github :{" "}
          <a
            className='hover:opacity-60'
            title='github'
            href='https://github.com/hyunjaesung'>
            https://github.com/hyunjaesung
          </a>
          <br />
          blog :{" "}
          <a
            className='hover:opacity-60'
            title='blog'
            href='https://knowhere.oopy.io/'>
            https://knowhere.oopy.io/
          </a>
        </p>
      </div>
    </div>
  );
};

export default Introduce;
