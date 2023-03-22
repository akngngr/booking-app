import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Input, InputLabel, Stack, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { MainStack, theme } from "../../theme";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  let checkIn = format(date[0].startDate, "MM/dd/yyyy");
  let checkOut = format(date[0].endDate, "MM/dd/yyyy");

  return (
    <MainStack>
      <Navbar />
      <Header type="list" />
      <Box
        sx={{
          display: "flex",
          width: { xs: "98%", sm: "90%" },
          mt: { xs: 30, sm: 10 },
          gap: 1,
        }}
      >
        <Stack
          sx={{
            flex: 1,
            backgroundColor: theme.palette.secondary.main,
            p: 2,
            position: "sticky",
            top: "10px",
            borderRadius: "10px",
            gap: 2,
            minWidth: 'fit-content'
          }}
        >
          <Typography variant="h5">Search</Typography>
          <Box sx={{ml: 3}}>
            <InputLabel>Destination</InputLabel>
            <Input
              type="text"
              placeholder={`  ${destination.toUpperCase()}`}
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                border: "none",
                letterSpacing: 1.25,
              }}
            />
          </Box>
          <Stack sx={{gap: 2}}>
            <Box sx={{maxWidth: 'fit-content', ml: 3}}>
              <Box sx={{borderBottom: '1px solid black'}}>
                <InputLabel>Check-in & out Dates</InputLabel>
                <Typography variant="subtitle2" onClick={e => setOpenDate(true)} sx={{
                border: "none",
                  "&:hover": {cursor: "pointer"}
                }}>{checkIn} to {checkOut}</Typography>
              </Box>
              {/* <Box sx={{borderBottom: '1px solid black'}}>
                <InputLabel>Check-out Date</InputLabel>
                <Typography variant="h6">{checkOut}</Typography>
              </Box> */}
            </Box>
            <Box>
              {openDate && <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />}
            </Box>
          </Stack>
        </Stack>
        <Box sx={{ flex: 3, border: "2px solid red", p: 2 }}>Result</Box>
      </Box>
    </MainStack>
  );
};

export default List;
