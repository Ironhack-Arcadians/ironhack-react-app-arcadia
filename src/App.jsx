import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import GameList from "./pages/GameList";
import axios from "axios";

import HomePage from "./pages/HomePage/HomePage.jsx";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import { API_URL } from "./config/api.js";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/videogames.json`)
      .then((response) => {
        const gamesArr = Object.keys(response.data).map((id) => ({
          id,
          ...response.data[id],
        }));
        const gamesReversedArr = gamesArr.toReversed();

        setGames(gamesReversedArr);

      })
      .catch((e) => console.log("Error: ", e));
  }, []);

  /* useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch(
          "https://arcadia-3538a-default-rtdb.europe-west1.firebasedatabase.app/.json"
        );
        const data = await response.json();

        const gamesArr = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        
        console.log(gamesArr)

        setGames(gamesArr);
      } catch (error) {
        console.log("Error getting games from API", error);
      }
    }

    fetchGames();
  }, []);

  */
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
          <Route
            path="/catalogue"
            element={<GameList games={games} onDelete={handleDelete} />}
          />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
