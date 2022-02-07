import React from "react";

export default function FormPersonalData() {
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
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}
