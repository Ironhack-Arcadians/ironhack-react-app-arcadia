import { useState } from "react";

function GameForm({ onSubmitReview }) {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewData = {
          username,
          rating: parseFloat(rating), // Ensure the rating is a number
          comment,
        };
        onSubmitReview(reviewData); // Call the handler passed as prop
      };

    return (
        <form className="game-form" onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
            </label>
            <label>
                Comment:
                <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                />
            </label>
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
            <button id="submit-button" className="game-buttons glow-on-hover" type="submit">Submit Review</button>
        </form>
    );
}

export default GameForm;