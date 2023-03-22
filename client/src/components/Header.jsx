import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { Typography, Stack, Box, Input, Button } from "@mui/material";
import {
  BookingButton,
  HeaderBox,
  HeaderButton,
  StyledButton,
  theme,
} from "../theme.js";
import { Link, useNavigate } from "react-router-dom";
import HotelIcon from "@mui/icons-material/Hotel";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import KingBedIcon from "@mui/icons-material/KingBed";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = ({ type }) => {
  const [destination, setDestionation] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <Stack
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        bgcolor: theme.palette.primary.main,
        width: { xs: "100%", sm: "90%" },
        pb: 5,
        position: "relative",
      }}
    >
      <HeaderBox>
        <HeaderButton to="/" variant="text" component={Link}>
          <HotelIcon />
          <Typography>STAYS</Typography>
        </HeaderButton>
        <HeaderButton to="/map" variant="text" component={Link}>
          <FlightIcon />
          <Typography>FLIGHTS</Typography>
        </HeaderButton>
        <HeaderButton to="/map" variant="text" component={Link}>
          <DirectionsCarIcon />
          <Typography>CAR RENTALS</Typography>
        </HeaderButton>
        <HeaderButton to="/map" variant="text" component={Link}>
          <AttractionsIcon />
          <Typography>ATTRACTIONS</Typography>
        </HeaderButton>
        <HeaderButton to="/map" variant="text" component={Link}>
          <LocalTaxiIcon />
          <Typography>AIRPORT TAXIS</Typography>
        </HeaderButton>
      </HeaderBox>
      <>
        <Stack
          sx={{
            flexDirection: "column",
            p: { xs: "15px 20px", sm: "15px 25px" },
            width: "100%",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="h4"
              sx={{
                alignSelf: "flex-start",
                fontWeight: "800",
                color: "white",
              }}
            >
              A lifetime of discounts? It's Genius.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                alignSelf: "flex-start",
                fontWeight: "400",
                color: "white",
                marginBottom: 3,
              }}
            >
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Booking account
            </Typography>
            <StyledButton
              sx={{
                color: "white",
                width: { xs: "140px", sm: "160px" },
                height: { xs: "35px", sm: "40px" },
              }}
            >
              <Typography variant="subtitle2">Sign in / Register</Typography>
            </StyledButton>
          </Box>
        </Stack>
        <Stack
          sx={{
            flexDirection: { sm: "row" },
            gap: { xs: 2, sm: 2 },
            border: `3px solid ${theme.palette.secondary.main}`,
            m: "5px",
            p: "25px",
            height: { xs: 260, sm: 50, lg: 80 },
            width: "90%",
            bgcolor: "white",
            borderRadius: 5,
            position: "absolute",
            bottom: { xs: "-230px", sm: "-30px", lg: "-50px" },
            fontSize: { xs: 2, sm: 5 },
            alignItems: "center",
            justifyContent: "space-around",
            zIndex: "2",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <KingBedIcon />
            <Input
              onChange={(e) => setDestionation(e.target.value)}
              placeholder="Search..."
              sx={{
                fontSize: { sm: 10, lg: 15 },
                width: { xs: 120, sm: 50, lg: 120 },
              }}
            />
          </Box>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              position: "relative",
            }}
            onClick={() => setOpenDate(!openDate)}
          >
            <CalendarMonthIcon />
            <Box>
              <Typography sx={{ fontSize: { sm: 10, lg: 15 } }}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to `}
              </Typography>
              <Typography sx={{ fontSize: { sm: 10, lg: 15 } }}>
                {`${format(date[0].endDate, "MM/dd/yyyy")}`}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              marginTop: 50,
            }}
          >
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={date[0].startDate}
              />
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <PersonIcon />
            <Stack>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "250px",
                }}
              >
                <BookingButton
                  disabled={options.adult <= 1}
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </BookingButton>
                <Typography sx={{ fontSize: { sm: 10, lg: 15 } }}>
                  {`${options.adult} · Adult`}
                </Typography>
                <BookingButton
                  onClick={() => handleOption("adult", "i")}
                  sx={{ ml: 2 }}
                >
                  +
                </BookingButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "250px",
                }}
              >
                <BookingButton
                  disabled={options.children <= 0}
                  onClick={() => handleOption("children", "d")}
                  sx={{ mr: 2 }}
                >
                  -
                </BookingButton>
                <Typography sx={{ fontSize: { sm: 10, lg: 15 } }}>
                  {`${options.children} · Children`}
                </Typography>
                <BookingButton
                  onClick={() => handleOption("children", "i")}
                  sx={{ ml: 2 }}
                >
                  +
                </BookingButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "250px",
                }}
              >
                <BookingButton
                  disabled={options.room <= 1}
                  onClick={() => handleOption("room", "d")}
                  sx={{ mr: 2 }}
                >
                  -
                </BookingButton>
                <Typography sx={{ fontSize: { sm: 10, lg: 15 } }}>
                  {`${options.room} · Room`}
                </Typography>
                <BookingButton
                  onClick={() => handleOption("room", "i")}
                  sx={{ ml: 4 }}
                >
                  +
                </BookingButton>
              </Box>
            </Stack>
          </Box>
          {/*           
            <Stack
              sx={{
                position: "absolute",
                top: "55px",
                right: "50px",
                justifyContent: "center",
                alignItems: "flex-end",
                backgroundColor: theme.palette.otherColor.light,
                p: "15px",
                border: `1px solid ${theme.palette.otherColor.main}`,
                borderRadius: "20px",
                gap: 2,
                zIndex: "2",
              }}
            >
              <Stack
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                gap="5px"
              >
                <Typography sx={{ fontSize: { sm: 10, lg: 20 } }}>
                  Adult
                </Typography>
                <BookingButton
                  disabled={options.adult <= 1}
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </BookingButton>
                <Typography>{options.adult}</Typography>
                <BookingButton onClick={() => handleOption("adult", "i")}>
                  +
                </BookingButton>
              </Stack>
              <Stack
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                gap="5px"
              >
                <Typography sx={{ fontSize: { sm: 10, lg: 20 } }}>
                  Children
                </Typography>
                <BookingButton
                  disabled={options.children <= 0}
                  onClick={() => handleOption("children", "d")}
                >
                  -
                </BookingButton>
                <Typography>{options.children}</Typography>
                <BookingButton onClick={() => handleOption("children", "i")}>
                  +
                </BookingButton>
              </Stack>
              <Stack
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                gap="5px"
              >
                <Typography sx={{ fontSize: { sm: 10, lg: 20 } }}>
                  Room
                </Typography>

                <BookingButton
                  disabled={options.room <= 1}
                  onClick={() => handleOption("room", "d")}
                >
                  -
                </BookingButton>
                <Typography>{options.room}</Typography>
                <BookingButton onClick={() => handleOption("room", "i")}>
                  +
                </BookingButton>
              </Stack>
            </Stack>
           */}
          <Box>
            <Button variant="contained" onClick={handleSearch}>
              Search
            </Button>
          </Box>
        </Stack>
      </>
    </Stack>
  );
};

export default Header;
