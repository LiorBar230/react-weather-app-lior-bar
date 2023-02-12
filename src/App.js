import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This app was coded by{" "}
          <a
            href="https://www.linkedin.com/in/lior-bar-018186149/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lior Bar{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/LiorBar230/react-weather-app-lior-bar"
            target="_blank"
            rel="noopener noreferrer"
          >
            open source on GitHub
          </a>{" "}
          and
          <a
            href="https://brilliant-wisp-f9cee6.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
