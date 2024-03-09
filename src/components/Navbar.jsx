import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: 'black', padding: '15px'}}>
        <Toolbar variant="dense">
          <IconButton edge="start" aria-label="menu" sx={{ mr: 2, color: 'white' }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="pramiry" component="div">
            Game library by, {props.username}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
