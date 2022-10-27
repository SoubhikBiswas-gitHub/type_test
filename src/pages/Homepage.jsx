import { Box,Paper } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TypingBox from '../Component/TypingBox'
import UserMsgDisplay from '../Component/UserMsgDisplay'
import { useTheme } from '../Context/ThemeContext'

function Homepage() {

const[quotetext,setQuotetext]=useState({})

const fetchAdvice = () => {
  axios.get('https://api.adviceslip.com/advice')
  .then((response) =>  {
      const { advice } = response.data.slip;

      setQuotetext({ advice });
  })

  .catch ((error) => {
      console.log(error);
  })
}

    const {theme}= useTheme()  


  useEffect(()=>{
    fetchAdvice();
  },[])

  return (
    <Box sx={{
        display:"flex", 
        flexDirection:"column",
        minHeight:"100%",
        width:"100%"
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
            backgroundColor:theme.mainbg
          }}
        >
          <div style={{fontSize:"1.3rem",fontWeight:"700",color:theme.mainbg2,textAlign:"center" }}> <q>{quotetext.advice}</q></div>
         
        </Paper>

        <TypingBox />
        <UserMsgDisplay />
      </Box>
  )
}

export default Homepage