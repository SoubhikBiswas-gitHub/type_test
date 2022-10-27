import { Box, Button, TextField,Modal } from '@mui/material'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import GoogleButton from 'react-google-button';
import { useAlert } from '../Context/AlertContext';
import { useTheme } from '../Context/ThemeContext';
import { auth } from '../firebaseConfig';

const SigninForm = ({open,onModalClose,sx}) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setAlert} = useAlert();
    const {theme} = useTheme();
    const googleProvider=new GoogleAuthProvider();
const signInWithGoogle=()=>{
    signInWithPopup(auth,googleProvider).then((res)=>{
        onModalClose();
        setAlert({
            open: true,
            type: 'success',
            message: 'Sign In success'
        });
        setTimeout(()=>{
            setAlert({
                open:false,
                type: "",
                message: ""
            })
        },2000);
    }).catch((value) => {
        onModalClose();
        setAlert({
            open: true,
            type: 'error',
            message: 'Unable to Sign In'
        });
        setTimeout(()=>{
            setAlert({
                open:false,
                type: "",
                message: ""
            })
        },2000);
    })
}
    const handleSubmit = () =>{
        if(!email || !password){
            setAlert({
                open: true,
                type: 'warning',
                message: ' Please fill all details'
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

        auth.signInWithEmailAndPassword(email,password).then((ok)=>{
            onModalClose();
            setAlert({
                open: true,
                type: 'success',
                message: 'Sign In success'
            });
            setTimeout(()=>{
                setAlert({
                    open:false,
                    type: "",
                    message: ""
                })
            },2000);
            onModalClose();

        }).catch((err)=>{

            setAlert({
                open: true,
                type: 'error',
                message: 'Unable to Sign In'
            });
            setTimeout(()=>{
                setAlert({
                    open:false,
                    type: "",
                    message: ""
                })
            },2000);
        });
    }



  return (
    <Modal
    open={open}
    onClose={onModalClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
        <Box
        sx={sx}
     p={3}
     style={{
        padding:10,
        display:"flex",
        flexDirection:"column",
        gap:"20px",
        backgroundColor:theme.box
     }}>
        <TextField
        variant="outlined"
        type="email"
        label="Enter email"
        InputLabelProps={{
            style: {
                color: theme.title
            } }}
        InputProps={{
            style:{
                color:theme.title,
            }
        }
        }
            
        onChange={(e)=> setEmail(e.target.value)}>

        </TextField>
        <TextField
        variant="outlined"
        type="password"
        label="Enter Password"
        InputLabelProps={{
            style: {
                color: theme.title
            } }}
        InputProps={{
            style:{
                color: theme.title,
            }
        }
        }
        onChange={(e)=> setPassword(e.target.value)}/>

        <Button
        variant="contained"
        size="large"
        style={{backgroundColor:theme.title, color:theme.background}}
        onClick = {handleSubmit}>
            Sign in
        </Button>  

        <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column"}} >
     <div style={{ textAlign:"center"}}>Or</div>
      <GoogleButton style={{margin:"auto"}} label='Sign up with Google' onClick={signInWithGoogle}/>
     </Box>
    
    </Box>
    </Modal>
  )
}

export default SigninForm