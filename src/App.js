import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import FormPersonalData from "./components/FormPersonalData";
import FormProfessionalData from "./components/FormProfessionalData";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";

function App() {
  const schmoe = [
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
  const randomNumber = Math.ceil(Math.random() * 28);
  const avatar = `https://joeschmoe.io/api/v1/${schmoe[randomNumber]}`;
  const [user, setUser] = useState({
    userEmail: "",
    userName: "",
    userDescription: "",
    userCity: "",
    userCountry: "",
    avatar: avatar,
    userYearExperience: "",
    userSector: "",
    userSkills: [],
  });
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<FormPersonalData user={user} setUser={setUser} />}
        />
        <Route
          path="professionalData"
          element={<FormProfessionalData user={user} setUser={setUser} />}
        />
        <Route
          path="profile"
          element={<Profile user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
