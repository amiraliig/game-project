import React, { useEffect, useState } from "react";
import { GenresList } from "../Components/GenresList";
import GlobalApi from "../Services/GlobalApi";
import { Banner } from "../Components/Banner";
import { TrendingGames } from "../Components/TrendingGames";
import converterTime from "../Services/reslisedTime";
import { GameCardSkleton } from "../Components/GameCardSkleton";
import useGames from "../hooks/useGames";
import { BannerSkleton } from "../Components/BannerSkleton";

export const Home = () => {
  const { games, err, isLoading } = useGames();
  console.log(games);
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
      {games.length > 0 ? (
        <div>
          <Banner gameBanner={games} />
          <TrendingGames gameList={games} isLoading={isLoading} />
        </div>
      ) : null}
    </div>
  );
};
