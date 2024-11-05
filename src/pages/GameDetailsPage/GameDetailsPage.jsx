import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./GameDetailsPage.css";

import { API_URL } from "../../config/api.js";
import Loader from "../../components/Loader.jsx";
import GameForm from "../../components/GameForm/GameForm.jsx";

function GameDetailsPage() {
  const [game, setGame] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const { gameId } = useParams();
  const navigate = useNavigate();

  const getGame = () => {
    axios
      .get(`${API_URL}/videogames/${gameId}.json`)
      .then((response) => {
        const gameData = response.data;

        const reviews = gameData.reviews ? Object.keys(gameData.reviews).map((key) => ({
          ...gameData.reviews[key],
          id: key,
        })) : [];
        setGame({ ...gameData, reviews });
        console.log("Reviews:", reviews)
      })
      .catch((e) => console.log("Oops, there is an error! ", e));
  };

  const deleteReview = (reviewId) => {
    axios
      .delete(`${API_URL}/videogames/${gameId}/reviews/${reviewId}.json`)
      .then(() => {
      alert("Review deleted successfully");
      getGame();
      })  
      .catch((error) => console.log("Error deleting review...", error));
  };

  const handleSubmitReview = (reviewData) => {
    axios
      .post(`${API_URL}/videogames/${gameId}/reviews.json`, reviewData)
      .then((response) => {
        alert("Review submitted successfully!");
        setShowForm(false);
        getGame();
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
        <div className="game-content">
          <div className="game-dimg">
            <img src={game.img_link} alt="Game image" />
          </div>
          <div className="game-dtext">
            <div className="game-dtitle">
              <h2>{game.name}</h2>
              <h3>{game.genre}</h3>
            </div>
            <h2>Score: {game.rating}</h2>
            <p>{game.description}</p>
            <a href={game.guide_link}>{game.name} guide</a>
          </div>
        </div>

        <div className="game-details-button-container">
          <Link to="/catalogue">
            <button id="back-button" className="game-buttons glow-on-hover">Back to videogames list</button>
          </Link>
          <button className="game-buttons glow-on-hover" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Cancel Review" : "Leave a Review"}
          </button>
        </div>
        {showForm && <GameForm onSubmitReview={handleSubmitReview} />}

        <div className="review-list">
          <h2>Reviews</h2>
          {game.reviews && game.reviews.length > 0 ? (
            game.reviews.map((review, index) => (
              <div key={index} className="review-item">
                <div className="review-header">
                <div className="details-user-name">
                  <h3>{review.username}</h3>
                </div>
                <div className="details-score">
                  <p>My score: {review.rating}</p>
                </div>
                </div>
                <div className="comment">
                  <p>"{review.comment}"</p>
                </div>
                <button className="delete-btn" onClick={() => deleteReview(review.id)}>Delete Review</button>
              </div>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameDetailsPage;
