import { useState, useEffect } from "react";
import "./ReviewEdit.css";

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
            <div>
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

            <button id="submit-button" className="review-buttons glow-on-hover" type="submit">Submit Edit</button>
            <button
                type="button"
                className="review-buttons glow-on-hover cancel-button"
                onClick={onCancelEdit}
                >
                Cancel Edit
            </button>
                    </div>
                </div>
        </form>
    );
}

export default ReviewEdit;