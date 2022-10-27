import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Modal,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { useState, useEffect } from "react";
import SignUpForm from "./SignUpForm";
import SigninForm from "./SigninForm";
import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from '@mui/icons-material/Logout';
import { useTheme } from "../Context/ThemeContext";

const pages = ["HOME", "LEADERBOARD", "ABOUT"];
const settings = ["SignUp", "SignIn"];


function Header({ parentCallback }) {
  const {theme} = useTheme();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const navigate = useNavigate();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor:theme.navibg,
    border: theme.mainbg,
    color:theme.navitext,
    boxShadow: 24,
    p: 4,
  };


  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      settings.pop();
      settings.pop();
      settings.push("Dashboard");
      settings.push("Logout");
    } else {
      settings.pop();
      settings.pop();
      settings.push("SignIn");
      settings.push("SignUp");
    }
  }, [user]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
    if (e.target.innerText === "HOME") {
      navigate("/");
    }
    if (e.target.innerText === "ABOUT") {
      navigate("/about");
    }
    if (e.target.innerText === "LEADERBOARD") {
      navigate("/leaderboard");
    }
  };

  const handleCloseUserMenu = (e) => {
    setAnchorElUser(null);
    console.log(e.target.innerText, "menu");
    if (e.target.innerText === "SignUp") {
      setSignUpModal(true);
    }
    if (e.target.innerText === "SignIn") {
      setSignInModal(true);
    }
    if (e.target.innerText === "Dashboard") {
      navigate("/user");
    }
    if (e.target.innerText === "Logout") {
      auth.signOut();
      navigate("/");
    }
  };

  const handleLogOut=()=>{
    auth.signOut();
    navigate("/");
  }

  const onModalClose = () => {
    setSignInModal(false);
    setSignUpModal(false);
  };

  return (
    <React.Fragment>
      <AppBar position="static">
        <Container
          maxWidth="xl"
          sx={{
            backgroundColor: theme.textbg2,
            boxShadow: " 0px 1px 10px 0px rgba(51, 50, 50, 0.5)",
          }}
        >
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".03rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TypeTest
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TypeTest
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {user ? (
                    <>
                    <Avatar
                      alt={user.displayName ? user.displayName : user.email}
                      src={user.photoURL ? user.photoURL : user.email.charAt(0)}
                    />
                   <LogoutIcon onClick={handleLogOut}/>
                   </>
                  ) : (
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  )}
                  
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {signUpModal && (
        <SignUpForm open={signUpModal} onModalClose={onModalClose} sx={style} />
      )}

      {signInModal && (
        <SigninForm open={signInModal} onModalClose={onModalClose} sx={style} />
      )}
    </React.Fragment>
  );
}
export default Header;
