import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "avataaars";

export default function FormProfessionalData(props) {
  const [skill, setSkill] = useState(""); // variable to keep the skill to add to the user profile
  const [skills, setSkills] = useState(props.user.userSkills); // object of added skills

  function handleInputChange(e) {
    const type = e.target.id; // keep the key of the input updated by user
    props.setUser((prev) => ({ ...prev, [type]: e.target.value })); // update the value of the key in the user object
  }

  function addSkills(e) {
    setSkill(e.target.value);
  }

  function addTag(e) {
    e.preventDefault();
    setSkills((prev) => [...prev, skill]);
    setSkill("");
  }

  function goToProfile() {
    props.setUser((prev) => ({ ...prev, userSkills: skills }));
    props.setIsActive(false);
  }

  return (
    <div className="content">
      <form>
        <div className="mb-3">
          <Avatar
            style={{ width: "200px", height: "200px" }}
            avatarStyle="Circle"
            topType="LongHairMiaWallace"
            accessoriesType="Prescription02"
            hairColor="BrownDark"
            facialHairType="Blank"
            clotheType="Hoodie"
            clotheColor="PastelBlue"
            eyeType="Happy"
            eyebrowType="Default"
            mouthType="Smile"
            skinColor="Light"
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
          {skills.map((item, index) => (
            <div className="tag" key={index}>
              {item}
            </div>
          ))}
        </div>
        <Link
          to="/profile"
          className="btn btn-warning"
          aria-current="page"
          onClick={goToProfile}
          type="submit"
        >
          Save
        </Link>
      </form>
    </div>
  );
}
