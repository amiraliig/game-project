import React, { useEffect, useState } from "react";
import { GenresList } from "../Components/GenresList";
import GlobalApi from "../Services/GlobalApi";
import { Banner } from "../Components/Banner";
import { TrendingGames } from "../Components/TrendingGames";
import converterTime from "../Services/reslisedTime";
import { GameCardSkleton } from "../Components/GameCardSkleton";

import { BannerSkleton } from "../Components/BannerSkleton";
import useGames  from "../hooks/useGames";
export const Home = (selectGenreGame) => {
  const { data, err, isLoading } = useGames(selectGenreGame.selectGenreGame);
 console.log(data)
  if (isLoading) {
    return (
      <>
        <BannerSkleton />
        <GameCardSkleton />
      </>
    );
  }
  return (
    <div className="">
      {data.length > 0 ? (
        <div>
          <Banner gameBanner={data} />
          <TrendingGames gameList={data} isLoading={isLoading} />
        </div>
      ) : null}
    </div>
  );
};
