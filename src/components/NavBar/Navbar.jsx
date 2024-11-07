import { NavLink, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/Logo.png";
import "./NavBar.css";

function Navbar({ handleSearch }) {
  const [query, setQuery] = useState("");
  const location = useLocation();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(query);
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

      <div className="title-container">
        <h1>[Arcadia]</h1>
      </div>

      <div className="home-buttons">
        {location.pathname === "/catalogue" && (
          <div className="search-container">
            <input
              type="text"
              placeholder="Search games"
              value={query}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="search-bar"
            />
            <button onClick={handleSearchClick} className="search-button">
              Search
            </button>
          </div>
        )}
        <NavLink to="/catalogue" className="home-button">
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
