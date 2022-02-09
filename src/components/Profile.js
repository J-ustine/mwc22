import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export default function Profile(props) {
  const mailto = `mailto:${props.user.userEmail}`;

  return props.user.userName ? (
    <div className="userdata content">
      <div className="mb-3">
        <img
          src={props.user.avatar}
          alt=""
          width={200}
          style={{ borderRadius: "100%" }}
        />
      </div>
      <div className="mb-2 big">{props.user.userName.toUpperCase()}</div>
      <div className="mb-2 sector">{props.user.userSector.toUpperCase()}</div>
      <div className="mb-3 data description">
        <em>{props.user.userDescription}</em>
      </div>

      <div className="mb-3 data">
        {props.user.userEmail ? (
          <div>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />{" "}
            <a href={mailto}>{props.user.userEmail}</a>
          </div>
        ) : null}
      </div>
      <div className="mb-3 data">
        {props.user.userCity && props.user.userCountry ? (
          <div>
            <FontAwesomeIcon icon={faPaperPlane} className="icon" />{" "}
            {props.user.userCity} - {props.user.userCountry}
          </div>
        ) : null}
      </div>
      <div className="mb-3 data">
        {props.user.userYearExperience
          ? props.user.userYearExperience + " years of experience"
          : null}
      </div>
      <div className="mb-3 data">
        {props.user.userSkills.map((item, index) => (
          <div className="tag" key={index}>
            {item}{" "}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="content emptyProfile">
      Please update your data in the user section
    </div>
  );
}
