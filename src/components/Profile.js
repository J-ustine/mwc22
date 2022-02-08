import React from "react";

export default function Profile(props) {
  return (
    <div className="userdata">
      <div className="mb-3">
        <img
          src={props.user.avatar}
          alt=""
          width={200}
          style={{ borderRadius: "100%" }}
        />
      </div>
      <div className="mb-3">Email address : {props.user.userEmail}</div>
      <div className="mb-3">Full Name : {props.user.userName}</div>
      <div className="mb-3">Description : {props.user.userDescription}</div>
      <div className="mb-3">City : {props.user.userCity}</div>
      <div className="mb-3">Country : {props.user.userCountry}</div>
      <div className="mb-3">
        Years of experience : {props.user.userYearExperience}
      </div>
      <div className="mb-3">Sector : {props.user.userSector}</div>
      <div className="mb-3">Skills : {props.user.userSkills}</div>
    </div>
  );
}
