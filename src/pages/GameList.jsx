import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../config/api.js";
import { useEffect, useState } from "react";
import "./GameList.css";

function GameList() {
    const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/videogames.json`)
      .then((response) => {
        const gamesArr = Object.keys(response.data).map((id) => ({
          id: id,
          ...response.data[id],
        }));
        const gamesReversedArr = gamesArr.toReversed();
        setGames(gamesReversedArr);

      })
      .catch((e) => console.log("Error: ", e));
  }, []);



  if (games.length === 0) {
    return <p>No games available</p>;
  }

  return (
    <div className="list-boundary">
      <ul className="games-list">
        {games && games.map((gameObj) => (
          <li key={gameObj.id} className="game-item">
            <img
              src={gameObj.img_link}
              alt={`${gameObj.name}`}
              className="recipe-img"
            />
            <div className="game-name">
              <h2>{gameObj.name}</h2>
            </div>
              <div className="game-text">
              <p>{gameObj.genre}</p>
              <p>{gameObj.rating}</p>
              </div>

            <div className="game-buttons glow-on-hover">
              <Link to={`/catalogue/${gameObj.id}`}>
                <button className="game-list-button">More Details</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
