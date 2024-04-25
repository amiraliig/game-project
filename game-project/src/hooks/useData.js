import { useEffect, useState } from "react";

import axiosCreate from "../Services/GlobalApi";
import { key } from "../Services/GlobalApi";
const useData = (typeOfData, gameGenre, deps) => {
  const [data, setdata] = useState([]);
  const [err, setErr] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(
    () => {
      setLoading(true);
      axiosCreate
        .get(typeOfData + "?key=" + key, { ...gameGenre })
        .then((res) => {
          setdata(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    },
    deps ? [...deps] : []
  );
  return { data, err, isLoading };
};
export default useData;
