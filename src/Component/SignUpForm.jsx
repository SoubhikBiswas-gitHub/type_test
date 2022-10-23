import { Box, Button, TextField,Modal } from "@mui/material";
import React, { useState } from "react";
import {auth} from '../firebaseConfig'

function SignUpForm({open,onModalClose,sx}) {
    const[email,setEmail] =useState("");
    const[password,setPassword] =useState("");
    const[confirmPassword,setConfirmPassword] =useState("");


   

    

    const handleSubmit =()=>{
        if( !email || !password || !confirmPassword){
            alert("Not Found");
            return;
            // setAlert({
            //     open: true,
            //     type: 'warning',
            //     message: 'fill all details'
            // });
            // setTimeout(()=>{
            //     setAlert({
            //         open:false,
            //         type: "",
            //         message: ""
            //     })
            // },2000);;
            // return;
            // return;
        }
        if(password!==confirmPassword){
            alert("Password not mathch");
            return;
            // setAlert({
            //     open: true,
            //     type: 'warning',
            //     message: 'password mismatch'
            // });
            // setTimeout(()=>{
            //     setAlert({
            //         open:false,
            //         type: "",
            //         message: ""
            //     })
            // },2000);;
            // return;
            // return;
        }
        auth.createUserWithEmailAndPassword(email,password).then((ok)=>{
            alert("Account Created")
        }).catch(err=>console.log("error ",err))
            // setAlert({
            //     open: true,
            //     type: 'success',
            //     message: 'signed in'
            // });
            // setTimeout(()=>{
            //     setAlert({
            //         open:false,
            //         type: "",
            //         message: ""
            //     })
            // },2000);
        //     handleClose();
        // }).catch((err)=>{
        //     setAlert({
        //         open: true,
        //         type: 'error',
        //         message: 'not able to sign in'
        //     });
        //     setTimeout(()=>{
        //         setAlert({
        //             open:false,
        //             type: "",
        //             message: ""
        //         })
        //     },2000);
        // });
    }

  return (
    <Modal
        open={open}
        onClose={onModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
    <Box
      p={3}
      style={{
        padding: 10,
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
      sx={sx}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter email"
        // InputLabelProps={{
        //   style: {
        //     color: theme.title,
        //   },
        // }}
        // InputProps={{
        //   style: {
        //     color: theme.title,
        //   },
        // }}
        onChange={(e) => setEmail(e.target.value)}
      ></TextField>
      <TextField
        variant="outlined"
        type="password"
        label="Enter Password"
        // InputLabelProps={{
        //   style: {
        //     color: theme.title,
        //   },
        // }}
        // InputProps={{
        //   style: {
        //     color: theme.title,
        //   },
        // }}
        onChange={(e) => setPassword(e.target.value)}
      ></TextField>
      <TextField
        variant="outlined"
        type="password"
        label="Confirm Password"
        // InputLabelProps={{
        //   style: {
        //     color: theme.title,
        //   },
        // }}
        // InputProps={{
        //   style: {
        //     color: theme.title,
        //   },
        // }}
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></TextField>

      <Button
        variant="contained"
        size="large"
        // style={{ backgroundColor: theme.title, color: theme.background }}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
    </Box>
    </Modal>
  );
}

export default SignUpForm;
