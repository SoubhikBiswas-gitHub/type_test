import { Avatar, Box, CircularProgress, Paper } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import GppBadIcon from "@mui/icons-material/GppBad";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Graph from "../Component/Graph";
import { auth, db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { deepOrange, deepPurple } from "@mui/material/colors";
import TableCOmponent from "../Component/TableCOmponent";
import TableComponentSort from "../Component/TableComponentSort";
import { useTheme } from "../Context/ThemeContext";

function Userpage() {
  const [data, setData] = useState([]);
  const [WPMData, setWPMData] = useState([]);
  const [correctCharData, setCorrectCharData] = useState([]);
  const [incorrectCharData, setIncorrectCharData] = useState([]);
  const [missedCharData, setMissedCharData] = useState([]);
  const [extraCharData, setExtraCharData] = useState([]);
  const [MaxWPMData, setMaxWPMData] = useState([]);
  const [MaxcorrectCharData, setMaxCorrectCharData] = useState([]);
  const [MaxincorrectCharData, setMaxIncorrectCharData] = useState([]);
  const [MaxmissedCharData, setMaxMissedCharData] = useState([]);
  const [MaxextraCharData, setMaxExtraCharData] = useState([]);
  const [MaxAccuracyData, setMaxAccuracyData] = useState([]);
  const [user, loading] = useAuthState(auth);
  const [dataLoading, setDataLoading] = useState(true);
  const [joinedAt, setJoinedAt] = useState();
  const [userAccountCreate, setUserAccountCreate] = useState();
  const navigate = useNavigate();
  const fetchUserData = () => {
    if (!loading) {
      console.log(user);
      setJoinedAt(
        new Date(user.metadata.creationTime).toISOString().split("T")[0]
      );
      const { uid } = auth.currentUser;
      const resultRef = db.collection("results");
      let tempData = [];
      let cdata = [];
      let icdata = [];
      let mdata = [];
      let edata = [];
      let tempGraphData = [];
      let MaxWPMData = [];
      let Maxcdata = [];
      let Maxicdata = [];
      let MaxMdata = [];
      let MaxEdata = [];
      let MaxAccuracydata = [];
      
      var i=1;
      resultRef
        .where("userId", "==", uid)
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
           
            let obj=doc.data()
            obj.id=i++
            tempData.push({ ...obj });
            tempGraphData.push([doc.data().date, doc.data().wpm]);
            MaxWPMData.push(doc.data().wpm)
            cdata.push([doc.data().date, doc.data().correctChars]);
            Maxcdata.push(doc.data().correctChars)
            icdata.push([doc.data().date, doc.data().incorrectChars]);
            Maxicdata.push(doc.data().incorrectChars)
            mdata.push([doc.data().date, doc.data().missedChars]);
            MaxMdata.push(doc.data().missedChars)
            edata.push([doc.data().date, doc.data().extraChars]);
            MaxEdata.push(doc.data().extraChars)
            MaxAccuracydata.push(doc.data().accuracy)
          });
//           let i=1;
// var rowsData=tempData.map((obj)=>{
//     obj.id=i++
// })
console.log(tempData)

          setData(tempData);
          setWPMData(tempGraphData);
          setCorrectCharData(cdata);
          setIncorrectCharData(icdata);
          setMissedCharData(mdata);
          setExtraCharData(edata);
          setDataLoading(false);
          setMaxWPMData(MaxWPMData)
          setMaxCorrectCharData(Maxcdata)
          setMaxIncorrectCharData(Maxicdata)
          setMaxMissedCharData(MaxMdata)
          setMaxExtraCharData(MaxEdata)
          setMaxAccuracyData(MaxAccuracydata)
        });
    }
  };

  const findMax =(arr)=>{
    let val=0;
    for(let e of arr){
      if(e>val){
        val=e;
      }
    }
    return val
   }

let MaxValWPM = findMax(MaxWPMData);
let MAxValCorrectCharacter=findMax(MaxcorrectCharData);
let MAxValIncorrectCharacter=findMax(MaxincorrectCharData);
let MAxValMissedCharacter=findMax(MaxmissedCharData);
let MAxValExtraCharacter=findMax(MaxextraCharData);
let MAxValAccuracy=findMax(MaxAccuracyData);

 
  const {theme}= useTheme()

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    fetchUserData();
  }, [loading]);

  if (loading || dataLoading) {
    return (
      <div className="central-screen">
        <CircularProgress size={150} />
      </div>
    );
  }

  // const [Date , Time,WPM,Accuracy,correctChars,incorrectChars,extraChars,missedChars]
    const columns = [
      { field: 'id', headerName: 'ID', width: 10 },
        {field: 'date', headerName: 'Date', width: 100 },
        {field: 'time', headerName: 'Time', width: 100 },
        {field: 'accuracy', headerName: 'Accuracy', width: 100 },
        {field: 'wpm', headerName: 'WPM', width: 100 },
        {field: 'correctChars', headerName: 'Correct Character', width: 130 },
        {field: 'incorrectChars', headerName: 'Incorrect Character', width: 130 },
        {field: 'missedChars', headerName: 'Missed Character', width: 130 },
        {field: 'extraChars', headerName: 'Extra Character', width: 130 }
      ]

      
      console.log(data)
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "10px 20px",
      }}
    >
      {/* //userProfile */}
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          margin: "10px auto",
          display: "flex",
          flexDirection: "column",
        backgroundColor:theme.mainbg,

          
        }}
      >
        <Stack direction="row" spacing={3} sx={{ padding: "2px" ,width:"100%" }}>
          <Stack direction="column" spacing={1} sx={{ padding: "5px" ,width:"100%" }}>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                padding: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width:"100%",
                
              }}
              className="user-profile"

            >
              {user.photoURL ? (
                <Avatar
                  alt={user.displayName}
                  src={user.photoURL}
                  sx={{ width: 120, height: 120 }}
                />
              ) : (
                <Avatar
                  sx={{
                    bgcolor: deepOrange[500],
                    width: 120,
                    height: 120,
                    fontSize: "5rem",
                  }}
                >
                  {user.email.charAt(0)}
                </Avatar>
              )}

              <Stack direction="column" spacing={1} sx={{ padding: "5px" }}>
                <h2>{user.displayName ? user.displayName : user.email}</h2>
                <div style={{ alignItems: "center" }}>
                  <h4>
                    Account : <span>{user.email} </span>
                    {user.emailVerified ? (
                      <VerifiedIcon color="success" />
                    ) : (
                      <GppBadIcon color="error" />
                    )}
                  </h4>
                </div>
                <h4>
                  User ID : <span>{user.uid}</span>
                </h4>
                <h4>
                  Account Created : <span>{user.metadata.creationTime}</span>
                </h4>
                <h4>
                  Last Login : <span>{user.metadata.lastSignInTime}</span>
                </h4>
              </Stack>
            </Stack>
            <Stack direction="column" spacing={1} sx={{ padding: "5px" }}>
              <h2>User Test History : </h2>
              <Stack direction="row" spacing={1} sx={{ padding: "5px" }}>
                <div className="userStat">
                  Total Test Taken : <div className="user-result">{data.length}</div>
                </div>
                <div className="userStat">
                  Highest WPM <div className="user-result">{MaxValWPM}</div>
                </div>
                <div className="userStat">
                  Highest Accuracy <div className="user-result">{MAxValAccuracy}</div>
                </div>
                <div className="userStat">
                  Highest Correct Character Type :
                  <div className="user-result">{MAxValCorrectCharacter}</div>
                </div>
                <div className="userStat">
                  Highest Incorrect Character Type :
                  <div className="user-result">{MAxValIncorrectCharacter}</div>
                </div>
                <div className="userStat">
                  Highest Extra Character Type :
                  <div className="user-result">{MAxValExtraCharacter}</div>
                </div>
                <div className="userStat">
                  Highest Missed Character Type :
                  <div className="user-result">{MAxValMissedCharacter}</div>
                </div>
              </Stack>
            </Stack>
          </Stack> 
        </Stack>
        <Paper elevation={1} sx={{ width: "80%" ,padding:"auto" ,margin:"auto" }}>
       
          <Graph 
            graphData={WPMData}
            correctCharData={correctCharData}
            incorrectCharData={incorrectCharData}
            missedCharData={missedCharData}
            extraCharData={extraCharData}
            type="date"
          />
        </Paper>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          margin: "10px auto",
          display: "flex",
          flexDirection: "column",
        backgroundColor:theme.mainbg

        }}
      >
        <TableComponentSort columns={columns} rows={data} />
      </Paper>
    </Box>
  );
}

export default Userpage;
