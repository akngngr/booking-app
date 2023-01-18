import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  styled,
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
// import { AutoStoriesIcon,VpnKeyIcon,LoginIcon } from "@mui/icons-material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LoginIcon from "@mui/icons-material/Login";

const Navbar = () => {

  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    [theme.breakpoints.up("sm")]:{
      width: '80%',
    }
  }));

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.otherColor.main,
    },
  }));

  const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: 15,
  }));

  const IconsBox = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  const TextBox = styled(Box)(({ theme }) => ({
    display: "none",
    padding: 5,
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    display: { xs: "none", sm: "block" },
    padding: 5,
    backgroundColor: theme.palette.otherColor.main,
    borderRadius: theme.palette.borderRadius,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <IconsBox>
          <AutoStoriesIcon />
        </IconsBox>
        <TextBox>
          <Typography>Booking</Typography>
        </TextBox>
        <StyledBox>
          <StyledButton to="/register" variant="contained" component={Link}>
            <IconsBox>
              <VpnKeyIcon />
            </IconsBox>
            <TextBox>
              <Typography>Register</Typography>
            </TextBox>
          </StyledButton>
          <StyledButton to="/login" variant="contained" component={Link}>
            <IconsBox>
              <LoginIcon />
            </IconsBox>
            <TextBox>
              <Typography>Login</Typography>
            </TextBox>
          </StyledButton>
        </StyledBox>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;