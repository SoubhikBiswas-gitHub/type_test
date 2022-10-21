import * as React from "react";
import {Paper,CssBaseline,Container} from "@mui/material";
import TypingBox from "./TypingBox";
import Header from "./Header";
import { GlobalStyle } from "../Styled_Component/global";
// var randomWords = require("random-words");

function SimpleContainer() {
  // const words = randomWords(50);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ width: "100%" }}>
          <GlobalStyle />
        <Paper elevation={3} sx={{ minHeight: "100vh" }}>
          <Header />
          <Paper elevation={3}>

          </Paper>
          {/* <TypingBox words={words} /> */}
          <TypingBox  />
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default SimpleContainer;
