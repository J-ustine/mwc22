import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <img className="navbar-brand" src={logo} alt="" width={150} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active" aria-current="page">
              User
            </Link>
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
