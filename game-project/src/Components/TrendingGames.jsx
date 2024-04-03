import React from "react";
import { GameListCard } from "./GameListCard";
export const TrendingGames = ({ gameList }) => {
  return (
    <div className="dark:text-white p-2 m-2">
      <h2 className="font-bold text-3xl m-2">Trending Games</h2>
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 bg-opacity-30">
        {gameList.map(
          (item, index) => index < 9 && <div key={item.id}><GameListCard game={item} /> </div>
        )}
      </div>
    </div>
  );
};
