import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
const useGenres = () => {
  const [genres, setGenres] = useState([]);
  const [err, setErr] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    GlobalApi.getGenreList
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setErr(err);
        setLoading(false);
      });
  },[]);
  return { genres, err, isLoading };
};
export default useGenres;
