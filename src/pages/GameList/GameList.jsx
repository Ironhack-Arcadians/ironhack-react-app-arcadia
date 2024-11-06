import React from "react";
import axios from "axios";
import Loader from "../../components/Loader.jsx";
import { Link } from "react-router-dom";
import { API_URL } from "../../config/api";
import { useEffect, useState } from "react";
import "./GameList.css";

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    document.body.style.backgroundImage = 'url("https://img.freepik.com/free-vector/abstract-pixel-rain-background_23-2148388106.jpg?t=st=1730911387~exp=1730914987~hmac=5a30e01a55ddad9c87d303ae1eb5cbb0ec904d3d63bea8fe7fb52ed0b5491e4e&w=1380")';
    document.body.style.backgroundSize = 'cover'; 
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.padding = '0';
    
    axios
      .get(`${API_URL}/videogames.json`)
      .then((response) => {
        const gamesArr = Object.keys(response.data).map((id) => {
          const gameData = response.data[id];

          // Calculate average rating if reviews exist
          const reviews = gameData.reviews
            ? Object.values(gameData.reviews)
            : [];

            const averageRating =
            reviews.length > 0
              ? reviews.reduce((sum, review) => sum + Number(review.rating), 0) / reviews.length
              : null;

          return {
            id: id,
            ...gameData,
            rating: averageRating,
          };
        });

        // Reverse games array for the desired display order
        const gamesReversedArr = gamesArr.reverse();
        setGames(gamesReversedArr);
      })
      .catch((e) => console.log("Error: ", e));
  }, []);

  if (games.length === 0) {
    return  <Loader />;
  }

  return (
    <div className="list-boundary">
      <ul className="games-list">
        {games &&
          games.map((gameObj) => (
            <li key={gameObj.id} className="game-item">
              <img
                src={gameObj.img_link}
                alt={`${gameObj.name}`}
                className="recipe-img"
              />
              <div className="game-name">
                <h3>{gameObj.name}</h3>
              </div>
              <div className="game-text">
                <p>{gameObj.genre}</p>
                <p>
                  {gameObj.rating ? gameObj.rating.toFixed(1) : "No rating yet"}
                </p>
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
