import * as React from "react";
import { Paper, CssBaseline, Container,Box } from "@mui/material";
import { useState, useEffecte } from "react";
import TypingBox from "./TypingBox";
import Header from "./Header";
import { GlobalStyle } from "../Styled_Component/global";
import Footer from "./Footer";
import SignUpForm from "./SignUpForm";
import { ThemeContext, useTheme } from "../Context/ThemeContext";
import UserMsgDisplay from "./UserMsgDisplay";
// var randomWords = require("random-words");
// import { useContext } from '../Context/ThemeContext';

function ContainerOuter() {
  // const words = randomWords(50);
  const { theme } = useTheme();

  // React.useEffect(()=>{

  // },[])

  // const theme =React.useContext(ThemeContext)
  console.log(theme);
  return (
    <React.Fragment>
      <CssBaseline />
      
      <Container
        maxWidth="xl"
        sx={{ backgroundColor: "yellow", padding: ".5rem 0",display:"flex",alignItems:"center",justifyContent:"center" }}
      >
        <GlobalStyle />
        <Paper
          elevation={3}
          sx={{
            height: "100vh",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            display: "flex",
            flexDirection: "column",
            alignitems: "center",
            justifyContent: "center",
            backgroundColor: `${theme.background}`,

          }}
        >
         
          <Header />
          <Box sx={{
            display:"flex", 
            flexDirection:"column",
            // minHeight:"10",
          }}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                width: "80%",
                margin: "10px auto",
                padding: "10px",
              }}
            >
              <div className="moti-header">Motivation</div>
              <div className="moti-text">Motivation</div>
              <div className="moti-by">Motivation</div>
            </Paper>

            <TypingBox />
            <UserMsgDisplay />
          </Box>
          {/* <SignUpForm /> */}
          <Footer />
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default ContainerOuter;
