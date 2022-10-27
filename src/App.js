import "./App.css";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./Context/ThemeContext";
import ContainerOuter from "./Component/ContainerOuter";
import AlertSnackbar from "./Component/Alert";
import { GlobalStyle } from "./Styled_Component/global";

function App() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <AlertSnackbar />
      <GlobalStyle />
      <div className="canvas">
          <ContainerOuter />
      </div>
    </ThemeProvider>
  );
}

export default App;
