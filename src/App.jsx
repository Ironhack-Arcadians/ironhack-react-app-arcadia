import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";


import HomePage from "./pages/HomePage/HomePage.jsx";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar/Navbar.jsx";
import About from "./pages/About/About.jsx"
import GameDetailsPage from "./pages/GameDetailsPage/GameDetailsPage.jsx";
import GameList from "./pages/GameList";

function App() {
  const handleDelete = (id) => {
    setGames((prevGames) => prevGames.filter((game) => game.id !== id));
  };

  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/catalogue" element={<GameList onDelete={handleDelete} />}/>
          <Route path="/catalogue/:gameId" element={<GameDetailsPage />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
