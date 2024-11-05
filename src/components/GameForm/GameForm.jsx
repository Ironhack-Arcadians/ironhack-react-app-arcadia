import { useState } from "react";
import "./GameForm.css";

function GameForm({ onSubmitReview }) {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewData = {
          username,
          rating: parseFloat(rating), //ParseFloat() --> ensures the rating is a number.
          comment,
        };
        onSubmitReview(reviewData);
      };

    return (
        

        <form className="game-form" onSubmit={handleSubmit}>
            <div>
            <div>
            <label>
                Username:
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
            </label>
                </div>
                <div>
            <label>
                Comment:
                <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                />
            </label>
                </div>
                <div>

            <label>
                Rating:
                <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min="0"
                max="10"
                step="0.1"
                required
                />
            </label>
                </div>
                </div>
                <div>
            <button id="submit-button" className="game-buttons glow-on-hover" type="submit">Submit Review</button>
                </div>
        </form>
               
    );
}

export default GameForm;