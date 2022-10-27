import React, { useEffect } from "react";
import { Button, Paper } from "@mui/material";
import Graph from "./Graph";
import { auth, db } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

function Stats({
  // correctData={correctData}
  // incorrectData={incorrectData}
  WPMData,
  wpm,
  accuracy,
  correctChars,
  incorrectChars,
  extraChars,
  missedChars,
  reset
}) {


  const extraDataRemove=(dataExtra)=>{
    var timeSet = new Set();
    const newGraph = dataExtra.filter((i) => {
      if (!timeSet.has(i[0])) {
        timeSet.add(i[0]);
        return i;
      }
    });
    return newGraph;
  }
 
  const newWPMData=extraDataRemove(WPMData);


  const [user] = useAuthState(auth);
  const pushStatsToDb = async () => {
    const resultsRef = db.collection("results");
    const { uid } = auth.currentUser;
    // console.log(accuracy.isNaN(),accuracy,"sdsdsdss");
    if (!isNaN(accuracy)) {
      await resultsRef.add({
        userId: uid,
        date:(new Date()).toString().split(' ').splice(1,3).join(' '),
        time:new Date().toLocaleTimeString(),
        wpm: wpm,
        accuracy: accuracy,
        correctChars:`${correctChars}`,
        incorrectChars:`${incorrectChars}`,
        extraChars:`${extraChars}`,
        missedChars:`${missedChars}`,
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
  };
  useEffect(() => {
    if (user) {
      pushStatsToDb();
    }
  }, []);

  console.log(WPMData)
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
          <Button variant="contained" className={reset} onClick={reset} endIcon={<RestartAltIcon />}>
            Reset
          </Button>
        </div>
        <div className="game-stats-right" style={{ minWidth: "70%" }}>

          <Graph WPMData={newWPMData}  type={" "} />
        </div>
      </Paper>
    </div>
  );
}

export default Stats;
