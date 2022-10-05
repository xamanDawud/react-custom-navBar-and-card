import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-5xl bg-sky-400 my-3 p-4">Pricing</h1>
      <Pricing />
    </div>
  );
}

export default App;
