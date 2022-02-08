import React from "react";

export default function FormProfessionalData(props) {
  function handleInputChange(e) {
    const type = e.target.id;
    props.setUser((prev) => ({ ...prev, [type]: e.target.value }));
  }

  return (
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
        <input
          type="text"
          className="form-control"
          name="userSkills"
          id="userSkills"
          placeholder="Enter your skills"
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}
