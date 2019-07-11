import React from "react";
import JokeList from "./components/JokeList";
import "./style/App.css";

function App() {
  return (
    <div className="app">
      <img
        src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
        alt="icon"
      />
      <JokeList />
    </div>
  );
}

export default App;
