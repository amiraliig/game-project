import useData from "./useData";

const useGames = (selectGenreGame) => useData("/games",{params:{genres:selectGenreGame?.id}},[selectGenreGame]);
export default useGames;
