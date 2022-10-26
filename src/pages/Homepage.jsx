import { Box,Paper } from '@mui/material'
import React from 'react'
import TypingBox from '../Component/TypingBox'
import UserMsgDisplay from '../Component/UserMsgDisplay'

function Homepage() {
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
          }}
        >
          <div className="moti-header">Motivation</div>
          <div className="moti-text">Motivation</div>
          <div className="moti-by">Motivation</div>
        </Paper>

        <TypingBox />
        <UserMsgDisplay />
      </Box>
  )
}

export default Homepage