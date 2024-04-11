import React from "react";
import { GameListCard } from "./GameListCard";
import {useNavigate} from "react-router-dom";
export const TrendingGames = ({ gameList }) => {
  const navigate = useNavigate()
  
  return (
    <div className="dark:text-white ">
      <h2 className="font-bold text-3xl my-2">Trending Games</h2>
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 bg-opacity-30 gap-5">
        {gameList.map(
          (item, index) =>
            index < 9 && (
              <div key={item.id} className="grid" onClick={() => {navigate(`/gamepage/${item.id}`)}}>
                <GameListCard game={item} />{" "}
              </div>
            )
        )}
      </div>
    </div>
  );
};
