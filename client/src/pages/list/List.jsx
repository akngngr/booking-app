import React from "react";
import { Stack } from "@mui/material";
import Navbar from "../../components/Navbar"
import Header from "../../components/Header"
import { MainStack } from "../../theme";

const List = () => {
  return (
    <MainStack>
      <Navbar />
      <Header type="list" />
    </MainStack>
  );
};

export default List;
