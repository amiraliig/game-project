import React, { useEffect } from "react";
import { GameListCard } from "./GameListCard";
import { useNavigate } from "react-router-dom";
import { GameCardSkleton } from "./GameCardSkleton";
export const TrendingGames = ({ gameList, isLoading }) => {
  const navigate = useNavigate();

  return (
    <div className="dark:text-white ">
      <h2 className="font-bold text-3xl my-2">Trending Games</h2>
      <div className="grid md:grid md:grid-cols-2 sm:grid  sm:grid-cols-1  lg:grid-cols-3 bg-opacity-30 gap-3">
        {gameList.map(
          (item, index) =>
            index < 9 && (
              <div
                key={item.id}
                className=""
                onClick={() => {
                  navigate(`/gamepage/${item.id}`);
                }}
              >
                <GameListCard game={item} />{" "}
              </div>
            )
        )}
      </div>
    </div>
  );
};
