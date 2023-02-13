import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Featured from "../../components/Featured";
import { MainStack } from "../../theme";
import { Box, Typography } from "@mui/material";
import PropertyList from "../../components/PropertyList";
import FeaturedProperties from "../../components/FeaturedProperties";

const Home = () => {
  return (
    <MainStack sx={{ position: "relative" }}>
      <Navbar />
      <Header />
      <Featured />
      <Box sx={{width: {xs: '80%', sm: '100%', lg: '80%'}, paddingLeft: 5, marginTop: 5}}>
        <Typography variant="h5">Browse by property category</Typography>
      </Box>
      <PropertyList />
      <Box sx={{width: {xs: '80%', sm: '100%', lg: '80%'}, paddingLeft: 5, marginTop: 5}}>
        <Typography variant="h5">Featured Properties</Typography>
      </Box>
      <FeaturedProperties />
    </MainStack>
  );
};

export default Home;
