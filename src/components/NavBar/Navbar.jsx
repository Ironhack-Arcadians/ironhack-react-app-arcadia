import { NavLink, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/Logo.png";
import "./NavBar.css";

function Navbar({ handleSearch, handleClearSearch }) {
  const [query, setQuery] = useState("");
  const location = useLocation();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(query);
  };

  const handleClearClick = () => {
    setQuery("");  
    handleClearSearch("");  
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(query);
    }
  };


  return (
    <nav className="navbar">
      <div className="logo-container">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
      </div>
      <NavLink to="/">
      <div className="title-container">
        <h1>[Arcadia]</h1>
      </div>
      </NavLink>

      <div className="search-container">
        {location.pathname === "/catalogue" && (
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search games"
              value={query}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              className="search-bar"
              />
            <button onClick={handleSearchClick} className="search-button">
              Search
            </button>
          </div>
        )}
        </div>

      <div className="home-buttons">
        <NavLink to="/catalogue" className="home-button" onClick={handleClearClick}>
          Browse Games
        </NavLink>
        <NavLink to="/about" className="home-button">
          About Us
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
