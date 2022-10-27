//
import { AppBar, Paper, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import TableComponentSort from "../Component/TableComponentSort";
import { auth, db } from "../firebaseConfig";

function LeaderBoard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [data, setData] = React.useState([]);

  const [user, loading] = useAuthState(auth);

  const fetchUserData = () => {
    if (!loading) {
      const resultRef = db.collection("results");
      let tempData = [];
      var i = 1;
      resultRef.get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          let obj = doc.data();
          obj.id = i++;
          tempData.push({ ...obj });
        });
        setData(tempData);
      });
    }
  };
  const columns = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "name", headerName: "Name", width: 100 },
    { field: "date", headerName: "Date", width: 100 },
    { field: "time", headerName: "Time", width: 100 },
    { field: "accuracy", headerName: "Accuracy", width: 100 },
    { field: "wpm", headerName: "WPM", width: 100 },
    { field: "correctChars", headerName: "Correct Character", width: 130 },
    { field: "incorrectChars", headerName: "Incorrect Character", width: 130 },
    { field: "missedChars", headerName: "Missed Character", width: 130 },
    { field: "extraChars", headerName: "Extra Character", width: 130 },
  ];

  React.useEffect(() => {
    fetchUserData();
  }, [loading]);


  const initialState={
    sorting: {
      sortModel: [{ field: 'accuracy', sort: 'desc' }],
    },
  }
  return (
    <Box sx={{ width: "100%" }}>
     <Paper sx={{backgroundColor:"white" ,margin:"5px 10px"}}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          sx={{ }}
        >
          <Tab
            label="Word Per Minutes"
            style={{
              padding: "10px",
            }}
          ></Tab>
          <Tab
            label="Accuracy"
            style={{
              padding: "10px",
            }}
          ></Tab>
        </Tabs>
      </AppBar>
      </Paper>
      <Paper sx={{backgroundColor:"white" ,margin:"5px 10px",marginTop:0}}>
      {value === 0 && <TableComponentSort columns={columns} rows={data} initialState={initialState}/>}
      {value === 1 && <TableComponentSort columns={columns} rows={data} />}
      </Paper>
    </Box>
  );
}

export default LeaderBoard;
