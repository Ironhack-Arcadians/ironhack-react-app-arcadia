import React, { useEffect, useState } from "react";
import { API_URL } from "../../config/api";
import axios from "axios";
import "../HomePage/homePage.css";
import Carousel from "../../components/Carousel/Carousel";

function HomePage() {
  const [topGames, setTopGames] = useState([]);

  useEffect(() => {
    // Add a class to body when on HomePage
    document.body.classList.add("home-page-background");
    document.body.style.overflowY = "hidden";

    return () => {
      // Remove class and add y-axis scroller to body when leaving HomePage
      document.body.classList.remove("home-page-background");
      document.body.style.overflowY = "";
    };
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}/videogames.json`)
      .then((response) => {
        const gamesArr = Object.keys(response.data).map((id) => {
          const gameData = response.data[id];
          const reviews = gameData.reviews
            ? Object.values(gameData.reviews)
            : [];
          const averageRating =
            reviews.length > 0
              ? reviews.reduce(
                  (sum, review) => sum + Number(review.rating),
                  0
                ) / reviews.length
              : null;
          return {
            id,
            ...gameData,
            rating: averageRating,
          };
        });
        
        // Sort games by rating and select top 10
        const sortedTopGames = gamesArr
          .sort((a, b) => (b.rating || 0) - (a.rating || 0))
          .slice(0, 5);
        setTopGames(sortedTopGames);
      })
      .catch((e) => console.log("Error: ", e));
  }, []);

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to Arcadia Games</h1>
        <p>Your ultimate resource for games, reviews, and guides.</p>
      </header>

      <h1>Top 5 Games</h1>
      <Carousel games={topGames} />
    </div>
  );
}

export default HomePage;
