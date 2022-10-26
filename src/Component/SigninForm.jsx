import { Box, Button, TextField,Modal } from '@mui/material'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import GoogleButton from 'react-google-button';
// import { useAlert } from '../Context/AlertContext';
// import { useTheme } from '../Context/ThemeContext';
import { auth } from '../firebaseConfig';

const SigninForm = ({open,onModalClose,sx}) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const {setAlert} = useAlert();
    const googleProvider=new GoogleAuthProvider();
const signInWithGoogle=()=>{
    signInWithPopup(auth,googleProvider).then((res)=>{
        onModalClose();
        alert("login done")
    }).catch((value) => {
        onModalClose();
        alert("Error to LogIn")
    })
}
    const handleSubmit = () =>{
        if(!email || !password){
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
            // },2000);
            return;
        }

        auth.signInWithEmailAndPassword(email,password).then((ok)=>{
            alert("done");
            onModalClose();
            // setAlert({
            //     open: true,
            //     type: 'success',
            //     message: 'logged in'
            // });
            // setTimeout(()=>{
            //     setAlert({
            //         open:false,
            //         type: "",
            //         message: ""
            //     })
            // },2000);
            // handleClose();

        }).catch((err)=>{
            console.log(err.code, err.message);
            // setAlert({
            //     open: true,
            //     type: 'error',
            //     message: 'not able to login'
            // });
            // setTimeout(()=>{
            //     setAlert({
            //         open:false,
            //         type: "",
            //         message: ""
            //     })
            // },2000);
        });
    }

    // const {theme} = useTheme();


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
        gap:"20px"
        // backgroundColor:"transparent"
     }}>
        <TextField
        variant="outlined"
        type="email"
        label="Enter email"
        InputLabelProps={{
            style: {
                color: "balck"//theme.title
            } }}
        InputProps={{
            style:{
                color:"balck"//theme.title,
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
                color: "balck"//theme.title
            } }}
        InputProps={{
            style:{
                color: "balck"//theme.title,
            }
        }
        }
        onChange={(e)=> setPassword(e.target.value)}/>

        <Button
        variant="contained"
        size="large"
        // style={{backgroundColor:theme.title, color:theme.background}}
        onClick = {handleSubmit}>
            Sign in
        </Button>  
    <span>Or</span>
    <GoogleButton onClick={signInWithGoogle}/>
    </Box>
    </Modal>
  )
}

export default SigninForm