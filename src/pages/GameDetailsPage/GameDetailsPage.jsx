import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

import { API_URL } from "../../config/api.js";
import Loader from "../../components/Loader.jsx";

function GameDetailsPage() {
  const [game, setGame] = useState(null);

  const { gameId } = useParams();

  const navigate = useNavigate();

  const getGame = () => {
    axios
      .get(`${API_URL}/videogames/${gameId}.json`)
      .then((response) => {
        setGame(response.data);
      })
      .catch((e) => console.log("Oops, there is an error! ", e));
  };

  const deleteGame = () => {
    axios
      .delete(`${API_URL}/videogames/${gameId}.json`)
      .then((response) => {
        navigate("/catalogue");
      })
      .catch((error) => console.log("Error deleting project...", error));
  };

  useEffect(() => {
    getGame();
  }, [gameId]);

  if (game === null) {
    return <Loader />;
  }

  return (
    <div className="GameDetailsPage">
      {game && (
        <div className="game-details-card">
          <div className="game-title">
            <h1>{game.name}</h1>
            <h2>{game.genre}</h2>
          </div>
          <div className="game-img">
            <img src={game.img_link} alt="Game image" />
          </div>
          <div className="game-content">
            <h2>{game.rating}</h2>
            <p>{game.description}</p>
            <a href={game.guide_link}>{game.name} guide</a>
          </div>

          <button className="button"> Edit </button>

          <Link to="/catalogue">
            <button className="button">Back to videogames list </button>
          </Link>

          <button className="button" onClick={deleteGame}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default GameDetailsPage;
