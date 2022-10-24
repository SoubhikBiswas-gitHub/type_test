import React, { useEffect } from "react";
import { Paper } from "@mui/material";
import Graph from "./Graph";
import { auth, db } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

function Stats({
  graphData,
  wpm,
  accuracy,
  correctChars,
  incorrectChars,
  extraChars,
  missedChars,
}) {
  var timeSet = new Set();
  const newGraph = graphData.filter((i) => {
    if (!timeSet.has(i[0])) {
      timeSet.add(i[0]);
      return i;
    }
  });

  const [user] = useAuthState(auth);
    const pushStatsToDb = async()=>{
        const resultsRef = db.collection('results');
        const {uid} = auth.currentUser
        // console.log(accuracy.isNaN(),accuracy,"sdsdsdss");
        if(!isNaN(accuracy)){
            await resultsRef.add({
                userId: uid,
                wpm: wpm,
                accuracy: accuracy,
                characters: `${correctChars}/${incorrectChars}/${extraChars}/${missedChars}`,
                timeStamp: new Date()
            });
        }
        // else{
            
        //     setAlert({
        //         open:true,
        //         type:'error',
        //         message:'invalid test'
        //     });
        //     setTimeout(()=>{
        //         setAlert({
        //             open:false,
        //             type: "",
        //             message: ""
        //         })
        //     },2000);

        }
        useEffect(()=>{
          if(user){
              pushStatsToDb();
          }
      },[]);
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
        <div className="game-stats-left" style={{ minWidth: "30%" }}>
          <div className="title">WPM</div>
          <div className="subtitle">{wpm}</div>
          <div className="title">Accuracy</div>
          <div className="subtitle">{accuracy}</div>
          <div className="title">Characters</div>
          <div className="subtitle">
            {correctChars}/{incorrectChars}/{extraChars}/{missedChars}
          </div>
        </div>
        <div className="game-stats-right" style={{ minWidth: "70%" }}>
          <Graph graphData={newGraph} />
        </div>
      </Paper>
    </div>
  );
}

export default Stats;
