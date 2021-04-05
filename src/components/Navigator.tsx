import React from "react";
import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <nav className='m-16  flex justify-between items-center font-semibold'>
      <div>
        <Link to='/'>
          <span className='dancing text-5xl'>stevysung</span>
        </Link>
      </div>
      <div>
        <Link to='/works'>
          <span className='transition duration-300 ease-in-out hover:opacity-70 m-3 text-2xl'>
            works
          </span>
        </Link>
        <Link to='/aboutme'>
          <span className='transition duration-300 ease-in-out hover:opacity-70 m-3 text-2xl'>
            about me
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigator;
