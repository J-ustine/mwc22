import "./App.css";
import FormPersonalData from "./components/FormPersonalData";
import FormProfessionalData from "./components/FormProfessionalData";
import Profil from "./components/Profil";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <FormPersonalData />
      <FormProfessionalData />
      <Profil />
    </div>
  );
}

export default App;
