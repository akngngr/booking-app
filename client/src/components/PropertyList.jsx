import React from "react";
import { Typography } from "@mui/material";
import { ImageItem, MainStack, PropertyBox } from "../theme";

const PropertyList = () => {
  const dataList = [
    {
      id: 1,
      name: "Hotels",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/421848551.webp?k=e9198089d8a79341d649204712acc533bbbb90a967bf57c9bf5b9d03dbb1361b&o=&s=1",
      city: "",
      count: "123 Hotel",
    },
    {
      id: 2,
      name: "Apartments",
      image:
        "https://cf.bstatic.com/xdata/images/city/square250/786973.webp?k=024658600348dd5a08c8fbb86f188a3ffa89cd0c52ab388bcdad5285a5b7ae72&o=",
      city: "",
      count: "123 Apartments",
    },
    {
      id: 3,
      name: "Resorts",
      image:
        "https://cf.bstatic.com/xdata/images/city/square250/976784.webp?k=717a6a83ea61edb06017bb8c9bd3d36511ec0e1aef59ac94235584d4fd1709cb&o=",
      city: "",
      count: "123 Resorts",
    },
    {
      id: 4,
      name: "Villas",
      image:
        "https://cf.bstatic.com/xdata/images/city/square250/976695.webp?k=c83d7dfc7e8646a874b3ebef068f0ce4af27681765e08419fa05140d4d1c04a8&o=",
      city: "",
      count: "123 Villas",
    },
    {
      id: 5,
      name: "Cabins",
      image:
        "https://cf.bstatic.com/xdata/images/city/square250/653231.webp?k=526fe3dd8fc78cbaccaee3be9e675b624e73b666ab757ecb0ebf31c7f7d96264&o=",
      city: "",
      count: "123 Cabins",
    },
  ];

  const item = dataList.map((data) => (
    <PropertyBox key={data.id}>
      <ImageItem sx={{ width: "150px" }}>
        <img
          src={data.image}
          alt={data.name}
          style={{ borderRadius: "20px 20px 0 0" }}
        />
      </ImageItem>
      <Typography variant="h6">{data.name}</Typography>
      <Typography variant="p">{data.count}</Typography>
    </PropertyBox>
  ));

  return (
    <MainStack
      sx={{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 5,
        marginTop: 5,
      }}
    >
      {item}
    </MainStack>
  );
};

export default PropertyList;
