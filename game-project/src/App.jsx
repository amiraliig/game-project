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
    <div className="dark:bg-[#151515] p-3">
      <Header />
      <div className="grid grid-cols-6"> 
      <GenresList />
      <div className="lg:col-span-5 col-span-6 mx-5 p-5">
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/gamepage/:id" element={<GamePage />} />
      </Routes>
      </div>
      </div>
    </div>
  );
}

export default App;
