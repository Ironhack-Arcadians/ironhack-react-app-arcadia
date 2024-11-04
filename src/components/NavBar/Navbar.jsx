import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.png";
import "./NavBar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
      <img src={logo} alt="Logo" className="logo"/>
      </div>
      <div className="title-container">
        <h1>[Arcadia]</h1>
      </div>
      <div className="home-buttons">
        <NavLink to="/catalogue" className="home-button">
          Browse Catalogue
        </NavLink>
        <NavLink to="/about" className="home-button">
          About Us
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;