import "./App.css";
import FormPersonalData from "./components/FormPersonalData";
import FormProfessionalData from "./components/FormProfessionalData";
import Profil from "./components/Profil";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <FormPersonalData />
      <FormProfessionalData />
      <Profil />
    </div>
  );
}

export default App;
