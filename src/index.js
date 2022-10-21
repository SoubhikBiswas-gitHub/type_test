import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GameMoodContextProvider } from "./Context/GameMood";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GameMoodContextProvider>
      <App />
    </GameMoodContextProvider>
  </React.StrictMode>
);
