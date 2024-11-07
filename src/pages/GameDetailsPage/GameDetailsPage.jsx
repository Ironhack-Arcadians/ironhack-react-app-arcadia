import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./GameDetailsPage.css";

import { API_URL } from "../../config/api.js";
import Loader from "../../components/Loader/Loader.jsx";
import GameForm from "../../components/GameForm/GameForm.jsx";
import ReviewEdit from "../../components/ReviewEdit/ReviewEdit.jsx";

function GameDetailsPage() {
  const [game, setGame] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingReview, setEditingReview] = useState(null);
  const { gameId } = useParams();

  const getGame = async () => {
    try {
      const response = await axios.get(`${API_URL}/videogames/${gameId}.json`);
      const gameData = response.data;

      const reviews = gameData.reviews
        ? Object.keys(gameData.reviews).map((key) => ({
            ...gameData.reviews[key],
            id: key,
          }))
        : [];

      const averageRating = reviews.length > 0
        ? reviews.reduce((sum, review) => sum + Number(review.rating), 0) / reviews.length
        : null;
 
      setGame({ ...gameData, reviews, rating: averageRating });
    } catch (e) {
      console.log("Oops, there is an error!", e);
    }
  };

  const deleteReview = async (reviewId) => {
    try {
      await axios.delete(`${API_URL}/videogames/${gameId}/reviews/${reviewId}.json`);
      alert("Review deleted successfully");
      await getGame(); 
    } catch (error) {
      console.log("Error deleting review...", error);
    }
  };

  const handleSubmitReview = async (reviewData) => {
    try {
      await axios.post(`${API_URL}/videogames/${gameId}/reviews.json`, reviewData);
      alert("Review submitted successfully!");
      setShowForm(false);
      await getGame(); 
    } catch (e) {
      console.log("Error submitting review...", e);
    }
  };

  const handleEditReview = (review) => {
    setEditingReview(review);
  };

  const handleCancelEdit = () => {
    setEditingReview(null);
  };

  const handleUpdateReview = async (updatedReview) => {
    try {
      await axios.put(`${API_URL}/videogames/${gameId}/reviews/${updatedReview.id}.json`, updatedReview);
      alert("Review updated successfully!");
      await getGame();
      setEditingReview(null);
    } catch (e) {
      console.log("Error updating review...", e);
    }
  };

  useEffect(() => {
    document.body.classList.add('game-details-page-background');
    getGame();

    return () => {
      document.body.classList.remove('game-details-page-background');
    }

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
            <h2>
              Score: {game.rating ? game.rating.toFixed(1) : "No rating yet"}
            </h2>
            <p>{game.description}</p>
            <a href={game.guide_link}>{game.name} guide</a>
          </div>
        </div>

        <div className="game-details-button-container">
          <Link to="/catalogue">
            <button id="back-button" className="game-buttons glow-on-hover">
              Back to game list
            </button>
          </Link>
          <button
            className="game-buttons glow-on-hover"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Cancel Review" : "Leave a Review"}
          </button>
        </div>
        {showForm && <GameForm onSubmitReview={handleSubmitReview} />}

        <div className="review-list">
          <h2>Reviews</h2>
          {game.reviews && game.reviews.length > 0 ? (
            game.reviews.map((review) => (
              <div key={review.id} className="review-item">
                {editingReview && editingReview.id === review.id ? (
                  <ReviewEdit
                    initialReview={review}
                    onEditReview={handleUpdateReview}
                    onCancelEdit={handleCancelEdit}
                  />
                ) : (
                  <>
                    <div className="review-header">
                      <h3>{review.username}</h3>
                      <h3>Rating: {review.rating}/10</h3>
                    </div>
                    <p className="comment">"{review.comment}"</p>
                    <div>
                      <button
                        className="game-buttons glow-on-hover"
                        onClick={() => handleEditReview(review)}
                      >
                        Edit
                      </button>
                      <button
                        className="game-buttons glow-on-hover"
                        onClick={() => deleteReview(review.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))
          ) : (
            <p className="no-reviews">No reviews available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameDetailsPage;
