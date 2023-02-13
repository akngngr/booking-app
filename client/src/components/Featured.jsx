import React from "react";
import { Box, ImageListItem, Stack, Typography } from "@mui/material";
import { MainStack } from "../theme";
import { borderRadius } from "@mui/system";
const Featured = () => {
  return (
    <MainStack
      sx={{
        width: {xs: '100%',sm: '45%', lg: '30%'},
        marginTop: {xs: '80px', sm: ''}
      }}
    >
      <Stack>
        <ImageListItem
          sx={{
            width: "100%",
            objectFit: "cover",
          }}
        >
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/205408681.webp?k=ba3438ee7612864906b0e0f5191f2a39bf8765825c65f833fe2b00337b2d3bdd&o=&s=1"
            alt="NY"
            style={{borderRadius: '20px'}}
          />
        </ImageListItem>
        <Box
          sx={{
            position: "absolute",
            bottom: "0px",
            width: "100%",
            color: "white",
            padding: "0 0 20px 20px",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: '0 0 20px 20px'
          }}
        >
          <Typography variant="h2">Place</Typography>
          <Typography variant="h3">City</Typography>
        </Box>
      </Stack>
    </MainStack>
  );
};

export default Featured;
