import React, { useEffect, useState } from "react";
import { GenresList } from "../Components/GenresList";
import GlobalApi from "../Services/GlobalApi";
import { Banner } from "../Components/Banner";
import { TrendingGames } from "../Components/TrendingGames";

export const Home = () => {
  const [allGameList, setAllGameList] = useState([]);
  useEffect(() => {
    GlobalApi.getAllGames.then((res) => {
      setAllGameList(res.data.results);
    });
  });
  return (
    <div className="grid grid-cols-4 h-full">
      <div className=" hidden lg:block mx-3">
        <GenresList />
      </div>
      <div className=" lg:col-span-3 col-span-4 mx-4">
        {allGameList.length > 0 ? 
        <div>
        <Banner gameBanner={allGameList[0]} /> 
        <TrendingGames gameList ={allGameList}/>
        </div>: null}
        
      </div>
    </div>
  );
};
