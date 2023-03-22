import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ImageItem, MainStack } from "../theme";

const FeaturedProperties = () => {
  const propertyList = [
    {
      id: 1,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1",
      name: "Oriente Palace Apartments",
      city: "Madrid, Spain",
      pricing: "Starting from $124",
      rating: 8.9,
      score: "Excellent",
    },
    {
      id: 2,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/63502504.webp?k=616b8970c72c6c31297e307a36568f6c567428ccd5c4a6317e7166a172b9dcf4&o=&s=1",
      name: "Hotel Edison",
      city: "Manhattan, New York",
      pricing: "Starting at $327",
      rating: 7.4,
      score: "Good",
    },
    {
      id: 3,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/39278620.webp?k=ff058ac46ae50c1d5d60cc425dc3e9a6abc175179624a0f0e6be6899516252f2&o=&s=1",
      name: "Midtown Convention",
      city: "Hudson, New York",
      pricing: "Starting at $342",
      rating: 5.5,
      score: "Fair",
    },
    {
      id: 4,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/340258150.webp?k=0f3e2f50c9f8b81d17380f115b6cc8b06d3863af8be8f2ba41188a8988c68df2&o=&s=1",
      name: "Riu Plaza",
      city: "Manhattan, New York",
      pricing: "Starting at $486",
      rating: 8.6,
      score: "Excellent",
    },
    {
      id: 5,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/325143043.webp?k=5a98baeb308ffd611fad3de1f840b149f604f7925b821768843567841c1ea577&o=&s=1",
      name: "Moxy",
      city: "East Village, New York",
      pricing: "Starting at $699",
      rating: 8.2,
      score: "Very good",
    },
  ];
  const item = propertyList.map((property) => (
    <Stack key={property.id}>
      <ImageItem sx={{ width: {xs: "360px", sm: "340px", lg: "280px"} }}>
        <img src={property.image} alt={property.name} />
      </ImageItem>
      <Typography variant="h6">{property.name}</Typography>
      <Typography variant="p">{property.city}</Typography>
      <Typography variant="h6">{property.pricing}</Typography>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Button variant="contained">{property.rating}</Button>
        <Typography variant="p" sx={{ fontWeight: "600" }}>
          {property.score}
        </Typography>
      </Box>
    </Stack>
  ));
  return (
    <MainStack
      sx={{
        width: "80%",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 6,
        marginTop: 5,
        justifyContent: { xs: "center", sm: "center", lg: "flex-start" },
      }}
    >
      {item}
    </MainStack>
  );
};

export default FeaturedProperties;
