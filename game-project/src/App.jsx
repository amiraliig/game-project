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

function App() {
  return (
    <div className="dark:bg-[#151515]">
      <Header />
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamepage/:id" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
