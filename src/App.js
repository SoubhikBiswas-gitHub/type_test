import "./App.css";
import ContainerOuter from "./Component/ContainerOuter";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { ThemeContextProvider } from "./Context/ThemeContext";



function App() {

  return (
    // <ThemeProvider theme={theme}>
      <ThemeContextProvider>
      <div className="canvas">
        <ContainerOuter />
      </div>
      </ThemeContextProvider>
      // </ThemeProvider>
  );
}

export default App;
