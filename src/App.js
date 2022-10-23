import "./App.css";
import ContainerOuter from "./Component/ContainerOuter";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    // <ThemeProvider theme={theme}>

    <ThemeContextProvider>
      <div className="canvas">
        <BrowserRouter>
          <ContainerOuter />
        </BrowserRouter>
      </div>
    </ThemeContextProvider>
    // </ThemeProvider>
  );
}

export default App;
