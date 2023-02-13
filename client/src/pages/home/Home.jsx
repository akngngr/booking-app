import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Featured from "../../components/Featured";
import { FeaturedStack, MainStack } from "../../theme";

const Home = () => {
  return (
    <MainStack sx={{ alignItems: "center", position: "relative" }}>
      <Navbar />
      <Header />
      <FeaturedStack>
        <Featured />
        <Featured />
        <Featured />
        
      </FeaturedStack>
    </MainStack>
  );
};

export default Home;
