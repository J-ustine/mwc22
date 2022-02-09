import React from "react";

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
      <div className="mb-3 data">
        <em>{props.user.userDescription}</em>
      </div>

      <div className="mb-3 data">
        {props.user.userEmail ? (
          <a href={mailto}>{props.user.userEmail}</a>
        ) : null}
      </div>
      <div className="mb-3 data">
        {props.user.userCity && props.user.userCountry
          ? props.user.userCity + " - " + props.user.userCountry
          : null}
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
