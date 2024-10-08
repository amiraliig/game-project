import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Home } from "./pages/Home";
import { Header } from "./Components/Header";
import { GamePage } from "./Components/GamePage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { JustForTest } from "./Components/JustForTest";
import { GenresList } from "./Components/GenresList";
import { GenresSkeleton } from "./Components/GenresSkeleton";
import useGenres from "./hooks/useGenres";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
function App() {
  // const [data,err,isLoading] = useGenres();
  const [selectGenre, setSelectGenre] = useState(null);
  const{data,err,isLoading} = useGenres()
 return (
    <div className="dark:bg-[#151515] p-3">
      <Header />
      <div className="grid grid-cols-6">
        {isLoading ? (
          <GenresSkeleton />
        ) : (
          <GenresList onSelectGenres={(item) => setSelectGenre(item)} />
        )}

        <div className="lg:col-span-5 col-span-6 p-5">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
            <Route path="/" element={<Home selectGenreGame ={selectGenre}/>} />
            <Route path="/gamepage/:id" element={<GamePage selectGenreGame ={selectGenre}/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
