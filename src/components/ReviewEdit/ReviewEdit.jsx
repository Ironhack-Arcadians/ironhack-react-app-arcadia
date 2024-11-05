import { useState, useEffect } from "react";

function ReviewEdit({ initialReview, onEditReview, onCancelEdit}){
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");


    useEffect(() => {
        if(initialReview) {
            setUsername(initialReview.username || "");
            setComment(initialReview.comment || "");
            setRating(initialReview.rating || "");
        }
    }, [initialReview]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedReview = {
            id: initialReview.id,
            username: username,
            rating: parseFloat(rating),
            comment: comment,
        };

        onEditReview(updatedReview);
    };

    return (
        <form className="edit-form" onSubmit={handleSubmit}>
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

export default ReviewEdit;