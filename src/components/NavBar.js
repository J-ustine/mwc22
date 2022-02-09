import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";

export default function NavBar(props) {
  function updateActiveLink() {
    props.setIsActive(!props.isActive);
  }

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
            <Link
              to="/"
              className={
                props.isActive ? props.activeLink : props.nonActiveLink
              }
              aria-current="page"
              onClick={updateActiveLink}
            >
              User
            </Link>
            <Link
              to="/profile"
              className={
                props.isActive ? props.nonActiveLink : props.activeLink
              }
              onClick={updateActiveLink}
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
