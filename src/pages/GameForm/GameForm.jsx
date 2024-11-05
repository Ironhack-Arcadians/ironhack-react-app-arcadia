import { useState } from "react";

function GameForm({ onSubmitReview }) {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username && comment && rating >= 0 && rating <= 10) {
            onSubmitReview({ username, comment, rating });
            setUsername("");
            setComment("");
            setRating("");
        } else {
            alert("Please fill out all fields and provide a rating between 0 and 10.")
        }
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
            <button type="submit">Submit Review</button>
        </form>
    );
}

export default GameForm;