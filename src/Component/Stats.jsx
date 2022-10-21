import React from "react";
import { Paper } from "@mui/material";
import Graph from "./Graph";

function Stats({graphData,wpm,accuracy,correctChars,incorrectChars,extraChars,missedChars}){
  // console.log(graphData)
    var timeSet = new Set();
    const newGraph = graphData.filter((i)=>{
        if(! timeSet.has(i[0])){
            timeSet.add(i[0]);
            return i;
        }
    });

  return (
    <div>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          minWidth: "100%",
          margin: "30px",
          padding: "10px",
        }}
      >
        <div className="game-stats-left" style={{minWidth:"30%"}}>
          <div className="title">WPM</div>
          <div className="subtitle">{wpm}</div>
          <div className="title">Accuracy</div>
          <div className="subtitle">{accuracy}</div>
          <div className="title">Characters</div>
          <div className="subtitle">
            {correctChars}/{incorrectChars}/{extraChars}/{missedChars}
          </div>
        </div>
        <div className="game-stats-right" style={{minWidth:"70%"}}>
        <Graph graphData={newGraph}/>
        </div>
      </Paper>
    </div>
  );
}

export default Stats;
