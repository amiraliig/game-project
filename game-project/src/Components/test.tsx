import axios from "axios";
import React, { useEffect, useState } from "react";
import { axiosCreate, key } from "../Services/GlobalApi";
export const GenresList = () => {
  const [dataGenres, setDataGenres] = useState([]);
  useEffect(() => {
    axios.get("https://api.rawg.io/api/genres?key=" + key)
    .then((res) => {
      setDataGenres(res.data.results);
      console.log(res);
    });
  }, []);

  return <div>{
    dataGenres.map((item)=>(
        <p>item.name</p>
    ))
    }</div>;
};
