import "./App.css";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./Context/ThemeContext";
import ContainerOuter from "./Component/ContainerOuter";
import AlertSnackbar from "./Component/Alert";
import { GlobalStyle } from "./Styled_Component/global";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
