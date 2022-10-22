import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import "./App.css";
import Container from "./Component/Container";
import { firebaseApp } from "./firebaseConfig";
// import { useTheme } from "./Context/ThemeContext";

function App() {
  // const { theme } = useTheme;


  return (
    // <ThemeProvider> </ThemeProvider>
      <div className="canvas">
        <Container />
      </div>
   
  );
}

export default App;
