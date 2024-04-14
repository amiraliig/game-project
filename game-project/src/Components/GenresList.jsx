import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import getCorppedImageUrl from "../Services/image-url";

export const GenresList = () => {
  const [dataGenres, setDataGenres] = useState([]);
  const [selectedGenre, setSelectdeGenre] = useState(null);
  useEffect(() => {
    
    GlobalApi.getGenreList
      .then((res) => {
        setDataGenres(res.data.results);
      })
      .catch((error) => {
      
      });
      return()=> GlobalApi.controller.abort()
  }, []);

  return (
    <div className="mx-4 hidden lg:block">
      <h2 className="text-3xl bold font-bold dark:text-white m-2">Genres</h2>
      <ul className="flex flex-col gap-2">
        {dataGenres.map((item, index) => (
          <li
            key={item.id}
            className={`gap-2 flex items-center cursor-pointer hover:bg-[#7171714f] rounded-lg transition duration-500 p-1 hover:scale-110 hover:font-bold ${
              selectedGenre == index
                ? "scale-110 bg-[#7171714f] font-bold"
                : null
            }`}
            onClick={() => setSelectdeGenre(index)}
          >
            <img
              key={item.id}
              src={getCorppedImageUrl(item.image_background,600,400)}
              alt=""
              className="h-12 w-12  object-cover rounded-lg"
            />
            <span className="dark:text-white mx-2 text-lg">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
