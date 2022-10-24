import { Box } from "@mui/material";
import React from "react";
function UserMsgDisplay() {
  return (
    <Box
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
      <div>
        <p>Press <span className="kdb">Tab</span> Open Navigation</p>
      </div>
    </Box>
  );
}

export default UserMsgDisplay;
