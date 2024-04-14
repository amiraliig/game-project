import React, { useEffect } from "react";

export const Banner = ({ gameBanner }) => {

  return (
    <div className="relative ">
      <div className="absolute bottom-0 text-white  bg-gradient-to-t from-[#151515] to-transparent w-full">
        <h2 className="text-lg md:text-[24px] font-bold">{gameBanner[0].name}</h2>
        <button className="px-2 p-1 bg-blue-700 m-2 font-bold rounded-md">
          Get now
        </button>
      </div>
      <img
        src={gameBanner[0].background_image}
        className="w-full rounded-[15px]  lg:h-[320px]  object-cover object-top lg:p-0 "
      />
    </div>
  );
};
