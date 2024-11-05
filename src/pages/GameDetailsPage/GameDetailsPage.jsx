import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./GameDetailsPage.css";


import { API_URL } from "../../config/api.js";
import Loader from "../../components/Loader.jsx";
import GameForm from "../GameForm/GameForm.jsx";

function GameDetailsPage() {
  const [game, setGame] = useState(null);
  const [showForm, setShowForm] = useState(false);

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


  const handleSubmitReview = (reviewData) => {
    axios.post(`${API_URL}/videogames/${gameId}/reviews.json`, reviewData)
    .then((response) => {
      alert("Review submitted successfully!")
      setShowForm(false);
    })
    .catch((e) => console.log("Error submitting review...", e));
  };



  useEffect(() => {
    getGame();
  }, [gameId]);

  if (game === null) {
    return <Loader />;
  }

  return (
    <div className="GameDetailsPage">
      <div className="game-details-card">
        <div className="game-dtitle">
          <h1>{game.name}</h1>
          <h2>{game.genre}</h2>
        </div>
        <div className="game-content">
          <div className="game-dimg">
            <img src={game.img_link} alt="Game image" />
          </div>
          <div className="game-dtext">
            <h2>{game.rating}</h2>
            <p>{game.description}</p>
            <a href={game.guide_link}>{game.name} guide</a>
          </div>
        </div>
        
        <div className="game-details-button-container">
          <Link to="/catalogue">
            <button className="button">Back to videogames list</button>
          </Link>
          <button className="button">Edit</button>
          <button className="delete-button" onClick={deleteGame}>
            Delete
          </button>

          <button className="button" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Cancel Review" : "Leave a Review"}
          </button>

        </div>
          {showForm && <GameForm onSubmitReview={handleSubmitReview} />}

        <div className="review-list">
          <h2>Reviews</h2>
          {game.reviews.map((review, index) => (
            <div key={index} className="review-item">
              <h3>{review.username}</h3>
              <p>Rating: {review.rating}/10</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameDetailsPage;
