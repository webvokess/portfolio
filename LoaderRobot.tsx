import React from "react";
import { GiVintageRobot } from "react-icons/gi";

export default function LoaderRobot() {
  return (
    <div className='flex items-center justify-center h-[80px]'>
      <div className='relative'>
        <div className='flex justify-center items-center w-[70px] h-[70px] border-4 border-t-4 border-white-1000 rounded-full animate-spin-robot'>
          <GiVintageRobot className='text-white-1000 text-32p' />
        </div>
        <div className='text-center text-yellow-700 mt-2'>
          Loading...
        </div>
      </div>
    </div>
  );
}
