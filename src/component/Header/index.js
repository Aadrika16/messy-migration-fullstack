import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">UserPortal</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;
