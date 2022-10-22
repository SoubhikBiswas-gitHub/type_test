import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GameMoodContextProvider } from "./Context/GameMood";
// import { ThemeContextProvider } from "./Context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GameMoodContextProvider>
      {/* <ThemeContextProvider> */}
        <App />
      {/* </ThemeContextProvider> */}
    </GameMoodContextProvider>
  </React.StrictMode>
);
