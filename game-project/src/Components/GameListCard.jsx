import React, { useEffect } from "react";

export const GameListCard = ({ game }) => {
  useEffect(() => {
    console.log(game);
  });
  return (
    <div className="dark:text-white m-2  h-[290px] bg-[#4242424f] rounded-lg">
      <img
        src={game.background_image}
        className="rounded-lg h-52 object-cover w-80"
      />
      <div className="mx-2 m-1">
        <h2 className="font-bold text-xl ">{game.name} </h2>
        <div>
          <span className="m-1">Genres:</span>
          <span className="text-">{game.genres[0].name}</span>
        </div>
      </div>
    </div>
  );
};
