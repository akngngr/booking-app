import React from "react";
import { MainStack, StyledBox } from "../theme";
import { Box, Button, Input, Stack, Typography } from "@mui/material";
import {theme} from '../theme.js'

const MailList = () => {
  return (
    <MainStack
      sx={{
        gap: 5,
        p: 5,
        mt: 10,
        backgroundColor: theme.palette.primary.main,
        width: {xs: '98%', sm: '90%'},
      }}
    >
      <Stack sx={{
        color: "white",
        gap: 2,
        textAlign: 'center',
      }}>
        <Typography variant="h4" sx={{fontWeight: 500}}>Save time, save money!</Typography>
        <Typography variant="h7">
          Sign up and we'll send the best deals to you.
        </Typography>
      </Stack>
      <StyledBox>
        <Input
          type="text"
          placeholder="Your Email"
          sx={{
            width: {xs: "180px", sm: "200px", lg:"250px"},
            height: "30px",
            p: "10px",
            color: theme.palette.otherColor.light,
            fontWeight: 500,
            letterSpacing: 1.25,
          }}
        />
        <Button
          variant="text"
          sx={{
            border: `2px solid ${theme.palette.otherColor.main}`,
            borderRadius: "10px",
            color: 'white',
            '&:hover': {
                backgroundColor: theme.palette.secondary.main,
            }
          }}
        >
          Subscribe
        </Button>
      </StyledBox>
    </MainStack>
  );
};

export default MailList;
