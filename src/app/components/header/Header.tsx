'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';

export default function Header() {
  
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{backgroundColor: theme.palette.error.main}}>
          <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
            Amazon Search
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
