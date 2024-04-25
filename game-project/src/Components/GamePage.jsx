import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "../Services/GlobalApi";
import { GenresList } from "./GenresList";
import { PlatformIcomList } from "./PlatformIcomList";
import converterTime from "../Services/reslisedTime";
import useGame from "../hooks/useGames";
export const GamePage = (selectGenreGame) => {
  //function
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  //////////////////////////////////////////////////////////////////
  scrollUp();
  const gameIdPage = useParams();
  const [gamePage, setGamepage] = useState("");
  const { data, err, isLoading } = useGame(selectGenreGame.selectGenreGame);
  useEffect(() => {
    console.log(data)
    setGamepage(data.find((item) => item.id == gameIdPage.id));
  });
  gamePage && console.log(gamePage.short_screenshots);
  if (gamePage) {
    return (
      <div className="text-white flex">
        <div className="flex flex-row relative ">
          <div className="lg:w-7/12 w-full">
            <div className="flex">
              <span className="bg-white text-slate-800 p-1 rounded-lg  ">
                RELEASED IN {converterTime(gamePage.released)}
              </span>
              <PlatformIcomList platforms={gamePage} />
              <span>AVARAGE PLAY TIME:{gamePage.playtime}</span>
            </div>

            <h1 className="text-white text-5xl font-bold my-4">
              {gamePage.name}
            </h1>
            <h2>ABOUT:</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              molestiae debitis dolores quia sapiente voluptate! Earum inventore
              cum non officiis nesciunt quos. Pariatur expedita, ea laboriosam,
              nisi eaque illo similique iusto saepe rem dolores, ipsum quisquam
              perferendis incidunt unde! Vel vitae modi maxime similique
              consequuntur consequatur molestiae, facere voluptate nobis hic
              necessitatibus. Vel consequatur perspiciatis, asperiores veritatis
              minus quisquam porro.
            </p>
          </div>
          <div className=" hidden lg:block lg:w-5/12">
            <img
              src={gamePage ? gamePage.short_screenshots[3].image : null}
              alt=""
              className="object-cover mb-4"
            />
            <div className=" grid grid-cols-2 gap-3">
              {gamePage
                ? gamePage.short_screenshots.map(
                    (item, index) =>
                      index < 4 && <img className="" src={item.image} />
                  )
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
