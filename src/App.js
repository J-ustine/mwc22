import "./App.css";
import { Routes, Route } from "react-router-dom";
import FormPersonalData from "./components/FormPersonalData";
import FormProfessionalData from "./components/FormProfessionalData";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<FormPersonalData />} />
        <Route path="professionalData" element={<FormProfessionalData />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
