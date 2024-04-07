import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "../Services/GlobalApi";
import { GenresList } from "./GenresList";

export const GamePage = () => {
  //function
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };
  //////////////////////////////////////////////////////////////////
  scrollUp()
  const gameIdPage = useParams();
  const [gamePage, setGamepage] = useState("");
  useEffect(() => {
    GlobalApi.getAllGames.then((res) => {
      setGamepage(res.data.results.find((item) => item.id == gameIdPage.id));
      console.log(gamePage);
    });
  });
  
  
  return (
    <div className="text-white">
      <div className="grid grid-cols-4 h-full">
        <div className=" hidden lg:block mx-3">
          <GenresList />
        </div>
        <div className=" lg:col-span-3 col-span-4 mx-4 flex">
          <div className=" flex relative">
          <img src={gamePage.background_image} alt="" className=" bg-gradient-to-t from-[#151515] to-transparent w-full rounded-[15px]  lg:h-[320px]  object-cover object-top lg:p-0 " />
          <span className="bg-gradient-to-t from-[#151515] to-transparent absolute w-full text-white ">i</span>
          </div>
          <h1 className="text-white">{gamePage.slug}</h1>
        </div>
      </div>
    </div>
  );
};
