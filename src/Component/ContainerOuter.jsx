import * as React from "react";
import { Paper, CssBaseline, Container,Box } from "@mui/material";
import { useState, useEffecte } from "react";
import TypingBox from "../Component/TypingBox";
import Header from "./Header";
import { GlobalStyle } from "../Styled_Component/global";
import Footer from "./Footer";
import { ThemeContext, useTheme } from "../Context/ThemeContext";
import UserMsgDisplay from "./UserMsgDisplay";
import { Route, Routes } from "react-router-dom";
import Homepage from '../pages/Homepage'
import Userpage from "../pages/Userpage";
import About from "../pages/About";
import LeaderBoard from "../pages/LeaderBoard";
// var randomWords = require("random-words");
// import { useContext } from '../Context/ThemeContext';

function ContainerOuter() {
  // const words = randomWords(50);
  const { theme } = useTheme();

  // React.useEffect(()=>{

  // },[])

  // const theme =React.useContext(ThemeContext)


  

  // console.log(theme);
  return (
    <React.Fragment>
      <CssBaseline />
      
      <Container
        maxWidth="xl"
        sx={{ backgroundColor: "yellow", padding: ".5rem 0",display:"flex",alignItems:"center",justifyContent:"center" }}
      >
        
        <Paper
          elevation={3}
          sx={{
           
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
          <Routes>
            <Route path="/" exact element={<Homepage />}/>
            <Route path="/user" element={<Userpage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/leaderboard" element={<LeaderBoard/>}/>
          </Routes>
          
          <Footer />
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default ContainerOuter;
