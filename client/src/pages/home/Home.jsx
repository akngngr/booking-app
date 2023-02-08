import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Stack sx={{ alignItems: 'center'}}>
      
        <Navbar />
        <Header />
    </Stack>
  );
};

export default Home;
