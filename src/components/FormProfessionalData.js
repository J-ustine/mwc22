import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FormProfessionalData(props) {
  const [skill, setSkill] = useState("");
  let skills = [];

  function handleInputChange(e) {
    const type = e.target.id;
    props.setUser((prev) => ({ ...prev, [type]: e.target.value }));
  }

  function addSkills(e) {
    setSkill(e.target.value);
  }

  function addTag(e) {
    e.preventDefault();
    skills.push(skill);
    console.log(skills);
    setSkill("");
    // props.setUser((prev) => ({ ...prev, userSkills: skills }));
  }

  return (
    <div className="content">
      <form>
        <div className="mb-3">
          <img
            src={props.user.avatar}
            alt=""
            width={200}
            style={{ borderRadius: "100%" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userYearExperience" className="form-label">
            Experience Years
          </label>
          <input
            type="number"
            className="form-control"
            id="userYearExperience"
            min="0"
            max="70"
            placeholder="How many years of experiences do you have?"
            onChange={handleInputChange}
            value={props.user.userYearExperience}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userSector" className="form-label">
            Sector
          </label>
          <input
            list="userSectorList"
            className="form-control"
            name="userSector"
            id="userSector"
            placeholder="Enter your sector"
            onChange={handleInputChange}
            value={props.user.userSector}
          />

          <datalist id="userSectorList">
            <option value="Front" />
            <option value="Back" />
            <option value="Data" />
            <option value="Mobile" />
          </datalist>
        </div>
        <div className="mb-3">
          <label htmlFor="userSkills" className="form-label">
            Skills
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              name="userSkills"
              id="userSkills"
              placeholder="Enter your skills"
              onChange={addSkills}
              value={skill}
            />
            <button
              className="btn btn-warning"
              type="button"
              id="button-addon2"
              onClick={addTag}
            >
              Add
            </button>
          </div>
          {props.user.userSkills}
        </div>
        <Link to="/profile" className="btn btn-warning" aria-current="page">
          Save
        </Link>
      </form>
    </div>
  );
}
