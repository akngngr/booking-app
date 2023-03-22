import React from "react";
import { MainStack, theme } from "../theme";
import { Box, List, ListItem, Typography } from "@mui/material";

const Footer = () => {
  const footerList = [
    {
      id: 1,
      name: "Countries",
    },
    {
      id: 2,
      name: "Regions",
    },
    {
      id: 3,
      name: "Cities",
    },
    {
      id: 4,
      name: "Districts",
    },
    {
      id: 5,
      name: "Airports",
    },
    {
      id: 6,
      name: "Hotels",
    },
  ];

  const list = footerList.map((item) => (
    <List sx={{
        color: theme.palette.primary.main,
        
    }}>
      <ListItem key={item.id}
        sx={{
            maxWidth: {xs: "80px", sm: "120px", lg: "200px"},
            justifyContent: 'center'

        }}
      >{item.name}</ListItem>
    </List>
  ));

  return (
    <MainStack
      sx={{
        mt: 5,
        gap: 5,
        
      }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        gap: {xs: 1, sm: 4, lg: 5},
        p: 5,
      }}>
        <Box sx={{flex: 1}}>{list}</Box>
        <Box sx={{flex: 1}}>{list}</Box>
        <Box sx={{flex: 1}}>{list}</Box>
        <Box sx={{flex: 1}}>{list}</Box>
      </Box>
      <Box>
        <Typography variant="h7">Copyright © 2023 A | K | O</Typography>
      </Box>
    </MainStack>
  );
};

export default Footer;
