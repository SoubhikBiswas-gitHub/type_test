import * as React from "react";
import { Alert, Snackbar, Slide,Paper } from "@mui/material";
// import React from 'react'

function Notification({ open,notificationType }) {
  return (
    <div>
      <Snackbar
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{}}
      >
        <Slide in={open} mountOnEnter unmountOnExit>
          <Alert severity="warning" sx={{backgroundColor:"#eed202",width:"contentFit"}}>
            <Paper elevation={5} sx={{display:"inline"}}>{notificationType}</Paper><span>on</span>  </Alert>
        </Slide>
      </Snackbar>
    </div>
  );
}

export default Notification;
