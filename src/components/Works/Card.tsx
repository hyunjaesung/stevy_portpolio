import React from "react";

interface Props {
  image: string;
  color: string;
  title: string[];
  subTitle: string;
}

const Card = ({ image, color, title, subTitle }: Props) => {
  return (
    <div className=' cursor-pointer card overflow-hidden w-96 m-10 h-44 relative bg-white'>
      <p
        className='absolute top-3 opacity-70 z-50 transition-all duration-200 ease-in'
        style={{
          right: "15%",
          writingMode: "vertical-lr",
        }}>
        {subTitle}
      </p>

      <div
        className='pic flex flex-col z-50 relative justify-between bg-no-repeat bg-center bg-cover w-3/4 h-full filter grayscale'
        style={{
          backgroundImage: `url("${image}")`,
        }}>
        <div></div>
        <div className='relative text-2xl z-50 font-bold text-white text-right mb-2 mr-4'>
          {title.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>

      <ul className='absolute left-10 top-0 z-50'>
        <li className='w-4 h-4 absolute -left-1.5 -top-2 rounded-xl bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-1 h-1 rounded-sm bg-white mb-1'></li>
        <li className='w-4 h-4 absolute -left-1.5 rounded-xl bg-white mb-1'></li>
      </ul>
      <button className={`${color} z-40`}></button>
    </div>
  );
};

export default Card;
