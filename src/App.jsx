import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { useState } from "react";

import HomePage from "./pages/HomePage/HomePage.jsx";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar/Navbar.jsx";
import About from "./pages/About/About.jsx";
import GameDetailsPage from "./pages/GameDetailsPage/GameDetailsPage.jsx";
import GameList from "./pages/GameList/GameList.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const handleDelete = (id) => {
    setGames((prevGames) => prevGames.filter((game) => game.id !== id));
  };

  const getScoreClass = (rating) => {
    if (rating >= 0 && rating < 5) return 'score-red';
    if (rating >= 5 && rating < 8) return 'score-yellow';
    if (rating >= 8 && rating <= 10) return 'score-green';
    return '';
  };

  return (
    <>
      <div className="app">
        <Navbar searchQuery={searchQuery} handleSearch={handleSearch} handleClearSearch={handleClearSearch}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route

            path="/catalogue"
            element={<GameList onDelete={handleDelete} getScoreClass={getScoreClass} searchQuery={searchQuery} />}
          />
          <Route path="/catalogue/:gameId"  element={<GameDetailsPage getScoreClass={getScoreClass} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
