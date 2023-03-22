import React from "react";
import { Typography } from "@mui/material";
import { FeaturedStack, FeaturedTextBox, ImageItem, MainStack } from "../theme";

const Featured = () => {
  const featuredList = [
    {
      id: 1,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/205408681.webp?k=ba3438ee7612864906b0e0f5191f2a39bf8765825c65f833fe2b00337b2d3bdd&o=&s=1",
      name: "Royalton New York",
      city: "New York",
    },
    {
      id: 2,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/422927614.webp?k=cd464468be8c186aa98e85718bc4e4d8668812c4f7a4916533030ba91a72a525&o=&s=1",
      name: "The Ritz-Carlton",
      city: "New York",
    },
    {
      id: 3,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/422292962.webp?k=65f49431f9800ea1b59c7878d72ee003045998106f351987a9a389fc55adc907&o=&s=1",
      name: "Oasis",
      city: "Boston",
    },
    {
      id: 4,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/421444656.webp?k=85a88ad1a509db0662fb52684c80d18156083490062762631c93d45ea02c8fb7&o=&s=1",
      name: "Midtown",
      city: "Chicago",
    },
    {
      id: 5,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/420043177.webp?k=6212c5be68a73a5b0e57b202e06e407841c77308f03d5d2dc69a77c2abc2549f&o=&s=1",
      name: "Canal Loft",
      city: "Miami",
    },
    {
      id: 6,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/417158066.webp?k=6fe51e41c36f3e99d8605f626d4d8b26f3b6192878a0776fd265d3ad5c41b874&o=&s=1",
      name: "Edison",
      city: "Orlando",
    },
  ];
  
  const item = featuredList.map((featured) => (
    <FeaturedStack key={featured.id}>
      <ImageItem>
        <img
          src={featured.image}
          alt={featured.name}
          style={{ borderRadius: "20px" }}
        />
      </ImageItem>
      <FeaturedTextBox className="textBox">
        <Typography variant="h5">{featured.name}</Typography>
        <Typography variant="h6">{featured.city}</Typography>
      </FeaturedTextBox>
    </FeaturedStack>
  ));
  return (
    <MainStack
      sx={{
        flexDirection: "row",
        gap: { xs: 5, sm: 8, lg: 5 },
        flexWrap: "wrap",
        width: { xs: "100%", sm: "100%", lg: "80%" },
        marginTop: { xs: "50%", sm: "80px" },
        padding: "20px",
      }}
    >
      {item}
    </MainStack>
  );
};

export default Featured;
