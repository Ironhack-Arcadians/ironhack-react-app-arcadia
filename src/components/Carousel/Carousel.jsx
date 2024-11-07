import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./carousel.css";

const Carousel = ({ games }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Update items to show only the first 5 games
    const positionedItems = games.slice(0, 5);
    setItems(positionedItems);
  }, [games]);

  return (
    <div className="carousel">
      <div className="carousel__list">
        {items.map((item) => (
          <div key={item.id} className="carousel__item">
            <Link to={`/catalogue/${item.id}`} className="carousel-item-link">
              <img
                src={item.img_link}
                alt={item.name}
                className="carousel-image"
              />
              <span className="carousel-item-title">{item.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;