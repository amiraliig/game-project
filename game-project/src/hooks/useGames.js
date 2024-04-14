import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const useGames = () => {
  const [games, setGames] = useState([]);
  const [err, setErr] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    GlobalApi.getAllGames
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return { games, err, isLoading };
};
export default useGames;
