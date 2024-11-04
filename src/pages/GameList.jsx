import React from "react";

function GameList({ games, onDelete }) {
  if (games.length === 0) {
    return <p>No games available</p>;
  }

  return (
    <div className="list-boundary">
      <ul className="games-list">
        {games.map((gameObj) => (
          <li key={gameObj.id} className="game-item">
              <img
                src={gameObj.img_link}
                alt={`${gameObj.name}`}
                className="recipe-img"
              />
            <div className="game-text">
              <h2>{gameObj.name}</h2>
              <p>{gameObj.genre}</p>
              <p>{gameObj.rating}</p>
              <p>{gameObj.description}</p>
              <p>{gameObj.guide_link}</p>
            </div>

            <div className="game-buttons">
              <button onClick={() => onDelete(gameObj.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
