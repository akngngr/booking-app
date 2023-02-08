import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LoginIcon from "@mui/icons-material/Login";
import {
  IconsBox,
  StyledAppBar,
  StyledBox,
  StyledButton,
  StyledToolbar,
  TextBox,
} from "../theme.js";

const Navbar = () => {
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
