import React, { useEffect } from "react";
import { PlatformIcomList } from "./PlatformIcomList";
import Critic from "./ Critic";
export const GameListCard = ({ game }) => {
  useEffect(() => {
    console.log(game);
  });
  return (
    <div className="dark:text-white bg-[#9b9b9b41] rounded-lg cursor-pointer hover:relative h-[335px] ">
      <img
        src={game.background_image}
        className="rounded-lg h-52 object-cover w-full m-auto "
      />
      <div className=" ">
        <div className="p-4">
          <h2 className="font-bold text-xl my-1">{game.name} </h2>
          <div>
            <span className="">
              Genres:
              {game.genres.map((item) => (
                <span className="text-slate-400"> {item.name}</span>
              ))}
            </span>
            <div className="flex justify-between my-2 bg">
              <PlatformIcomList platforms={game} />
              <Critic certicScore={game.metacritic} />
            </div>
           
          </div>
          
        </div>
       
      </div>
    </div>
  );
};
