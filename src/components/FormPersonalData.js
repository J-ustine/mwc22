import React from "react";
import { Link } from "react-router-dom";

export default function FormPersonalData(props) {
  function handleInputChange(e) {
    const type = e.target.id; // keep the key of the input updated by user
    props.setUser((prev) => ({ ...prev, [type]: e.target.value })); // update the value of the key in the user object
  }

  return (
    <div className="content">
      <form>
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
            onChange={handleInputChange} // on change keep value enter by user
            autoComplete="nope"
            value={props.user.userName} // add dynamic value to controlled the component
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="userEmail"
            placeholder="Enter your email"
            onChange={handleInputChange} // on change keep value enter by user
            autoComplete="off"
            value={props.user.userEmail} // add dynamic value to controlled the component
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
            onChange={handleInputChange} // on change keep value enter by user
            autoComplete="nope"
            value={props.user.userDescription} // add dynamic value to controlled the component
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
            onChange={handleInputChange} // on change keep value enter by user
            autoComplete="nope"
            value={props.user.userCity} // add dynamic value to controlled the component
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
            onChange={handleInputChange} // on change keep value enter by user
            autoComplete="nope"
            value={props.user.userCountry} // add dynamic value to controlled the component
          />
        </div>
        <Link
          to="/professionalData"
          className="btn btn-warning"
          aria-current="page"
          type="submit"
        >
          Next
        </Link>
      </form>
    </div>
  );
}
