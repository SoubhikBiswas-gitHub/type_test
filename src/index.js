import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GameModeContextProvider } from "./Context/GameMood";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { AlertContextProvider } from "./Context/AlertContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <GameModeContextProvider>
        <ThemeContextProvider>
          <AlertContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AlertContextProvider>
        </ThemeContextProvider>
      </GameModeContextProvider>
  </React.StrictMode>
);
