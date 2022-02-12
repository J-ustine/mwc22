import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import FormPersonalData from "./components/FormPersonalData";
import FormProfessionalData from "./components/FormProfessionalData";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";

function App() {
  const schmoe = [
    // list of avatar available
    "jacqueline",
    "jude",
    "jia",
    "jed",
    "jeri",
    "joe",
    "jack",
    "josh",
    "jodi",
    "jocelyn",
    "james",
    "julie",
    "jazebelle",
    "jabala",
    "jean",
    "jacques",
    "jake",
    "josephine",
    "jess",
    "jeanne",
    "jolee",
    "jerry",
    "jane",
    "jordan",
    "jon",
    "jai",
    "jana",
    "jenni",
  ];
  const randomNumber = Math.ceil(Math.random() * 28); // generate a random number to attribute a random avatar
  const avatar = `https://joeschmoe.io/api/v1/${schmoe[randomNumber]}`; //apicall to generate an avatar
  const [user, setUser] = useState({
    // object to keep user data
    userName: "",
    userEmail: "",
    userDescription: "",
    userCity: "",
    userCountry: "",
    avatar: avatar,
    userYearExperience: "",
    userSector: "",
    userSkills: [],
  });
  const activeLink = "nav-link active"; // classname of the active link
  const nonActiveLink = "nav-link"; // classname of the inactive link
  const [isActive, setIsActive] = useState(true); // variable to store if the link is active or not
  return (
    <div className="App">
      <NavBar
        activeLink={activeLink}
        nonActiveLink={nonActiveLink}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <Routes>
        <Route
          path="/"
          element={<FormPersonalData user={user} setUser={setUser} />}
        />
        <Route
          path="professionalData"
          element={
            <FormProfessionalData
              user={user}
              setUser={setUser}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          }
        />
        <Route path="profile" element={<Profile user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
