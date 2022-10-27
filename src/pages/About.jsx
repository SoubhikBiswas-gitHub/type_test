import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function About() {
  return (
    <Box sx={{display: "flex",flexDirection: "column",width: "100%",padding: "10px 20px",}}>
      <Paper elevation={3}
        sx={{width: "100%" ,margin:"5px auto" , padding: "5px"}}>
        <h1>About</h1>
        <p>
          TypeTest is a minimalistic typing test, featuring many test modes, an
          account system to save your typing speed history and user configurable
          features like themes, a smooth caret and more.
        </p>
      </Paper>
      <Paper elevation={3}sx={{width: "100%",margin: "10px auto",padding: " 5px 50px"}}>
        <h1>Features</h1>
        <Paper elevation={3} sx={{width: "100%" ,margin:"5px auto" , padding: "5px"}}>
            <h3 className="list-head">Mode :</h3>
            <p className="list">Time Mood</p>
              <p className="list">Words Mood</p>
        </Paper>
        <Paper elevation={3} sx={{width: "100%",margin:"5px auto" , padding: "5px"}}>
            <h3 className="list-head">Words are are generated Autometically</h3>
        </Paper>
        <Paper elevation={3} sx={{width: "100%",margin:"5px auto" , padding: "5px"}}>
            <h3 className="list-head">After test:</h3>
            <p className="list">Word per minutes</p>
              <p className="list">Correct Characters typed</p>
              <p className="list">Incorrect Characters typed</p>
              <p className="list">Missed Characters typed</p>
              <p className="list">Extra Characters typed</p>
        </Paper>
        <Paper elevation={3} sx={{width: "100%",margin:"5px auto" , padding: "5px"}}>
            <h3 className="list-head">Stat avilable</h3>
        </Paper>
        <Paper elevation={3} sx={{width: "100%",margin:"5px auto" , padding: "5px"}}>
            <h3 className="list-head">User page</h3>
            <p className="list">User Details With profile picture</p>
              <p className="list">User test record</p>
              <p className="list">User overall test stat</p>
              <p className="list">User overall test data table</p>
        </Paper>
        <Paper elevation={3} sx={{width: "100%",margin:"5px auto" , padding: "5px"}}>
            <h3 className="list-head">Leaderboard</h3>
        </Paper>

      </Paper>
    </Box>
  );
}

export default About;
