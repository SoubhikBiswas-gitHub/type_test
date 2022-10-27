import { Box, Button, TextField,Modal } from "@mui/material";
import React, { useState } from "react";
import GoogleButton from "react-google-button";
import {auth} from '../firebaseConfig'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAlert } from '../Context/AlertContext';
import { useTheme } from '../Context/ThemeContext';

function SignUpForm({open,onModalClose,sx}) {
    const[email,setEmail] =useState("");
    const[password,setPassword] =useState("");
    const[confirmPassword,setConfirmPassword] =useState("");
    const {theme} = useTheme();
    const {setAlert} = useAlert();

   
    const googleProvider=new GoogleAuthProvider();
    const signInWithGoogle=()=>{
        signInWithPopup(auth,googleProvider).then((res)=>{
            onModalClose();
            setAlert({
              open: true,
              type: 'success',
              message: 'signed in'
          });
          setTimeout(()=>{
              setAlert({
                  open:false,
                  type: "",
                  message: ""
              })
          },2000);
        }).catch((value) => {
            setAlert({
              open: true,
              type: 'warning',
              message: 'Not able to Sign In'
          });
          setTimeout(()=>{
              setAlert({
                  open:false,
                  type: "",
                  message: ""
              })
          },2000);
          return;
        })
      }
    

    const handleSubmit =()=>{
        if( !email || !password || !confirmPassword){
          
          setAlert({
            open: true,
            type: 'warning',
            message: 'Please fill all details'
        });
        setTimeout(()=>{
            setAlert({
                open:false,
                type: "",
                message: ""
            })
        },2000);
        return;
            
        }
        if(password!==confirmPassword){
            alert("Password not mathch");
            setAlert({
              open: true,
              type: 'warning',
              message: 'Password mismatch'
          });
          setTimeout(()=>{
              setAlert({
                  open:false,
                  type: "",
                  message: ""
              })
          },2000);;
          return;
        }
        auth.createUserWithEmailAndPassword(email,password).then((ok)=>{
          onModalClose()
          setAlert({
            open: true,
            type: 'success',
            message: 'signed in'
        });
        setTimeout(()=>{
            setAlert({
                open:false,
                type: "",
                message: ""
            })
        },2000);
        }).catch(err=>console.log("error ",err))
        setAlert({
                  open: true,
                  type: 'error',
                  message: 'Not able to sign in'
              });
              setTimeout(()=>{
                  setAlert({
                      open:false,
                      type: "",
                      message: ""
                  })
            },2000);      
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
        InputLabelProps={{
          style: {
            color: theme.title,
          },
        }}
        InputProps={{
          style: {
            color: theme.title,
          },
        }}
        onChange={(e) => setEmail(e.target.value)}
      ></TextField>
      <TextField
        variant="outlined"
        type="password"
        label="Enter Password"
        InputLabelProps={{
          style: {
            color: theme.title,
          },
        }}
        InputProps={{
          style: {
            color: theme.title,
          },
        }}
        onChange={(e) => setPassword(e.target.value)}
      ></TextField>
      <TextField
        variant="outlined"
        type="password"
        label="Confirm Password"
        InputLabelProps={{
          style: {
            color: theme.title,
          },
        }}
        InputProps={{
          style: {
            color: theme.title,
          },
        }}
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></TextField>

      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: theme.title, color: theme.background }}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
     
     <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column"}} >
     <div style={{ textAlign:"center"}}>Or</div>
      <GoogleButton style={{margin:"auto"}} label='Sign up with Google' onClick={signInWithGoogle}/>
     </Box>
     
      </Box>
    
    
    </Modal>
  );
}

export default SignUpForm;
