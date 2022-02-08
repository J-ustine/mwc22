import React from "react";
import { Link } from "react-router-dom";

export default function FormPersonalData(props) {
  function handleInputChange(e) {
    const type = e.target.id;
    props.setUser((prev) => ({ ...prev, [type]: e.target.value }));
  }

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="userEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="userEmail"
          placeholder="Enter your email"
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          name="userName"
          id="userName"
          placeholder="Enter your full name"
          onChange={handleInputChange}
          autoComplete="nope"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userDescription" className="form-label">
          What's make you unique?
        </label>
        <textarea
          name="userDescription"
          id="userDescription"
          className="form-control"
          cols="60"
          rows="3"
          placeholder="Enter a short description of you"
          onChange={handleInputChange}
          autoComplete="nope"
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="userCity" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          name="userCity"
          id="userCity"
          placeholder="Enter your city"
          onChange={handleInputChange}
          autoComplete="nope"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userCountry" className="form-label">
          Country
        </label>
        <input
          type="text"
          className="form-control"
          name="userCountry"
          id="userCountry"
          placeholder="Enter your country"
          onChange={handleInputChange}
          autoComplete="nope"
        />
      </div>
      <Link
        to="/professionalData"
        className="btn btn-primary"
        aria-current="page"
      >
        Save
      </Link>
    </form>
  );
}
