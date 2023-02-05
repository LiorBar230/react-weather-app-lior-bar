import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Weather App</h1>
        <Weather />
        <footer>
          This app was coded by{" "}
          <a href="https://www.linkedin.com/in/lior-bar-018186149/">
            Lior Bar and is{" "}
          </a>
          <a href="https://github.com/LiorBar230/react-weather-app-lior-bar">
            open source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
