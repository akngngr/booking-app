import React from 'react';
import Navbar from '../../components/Navbar';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{display: 'flex', justifyContent:'center'}}>
        <Navbar/>
    </Box>
  )
}

export default Home