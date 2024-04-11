import axios from "axios";

const key = "def692f5a921492fa3fc32fc21cce635";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});
const controller = new AbortController();
const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);
export default { getGenreList,getAllGames,controller };
