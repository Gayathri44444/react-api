import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddchartIcon from  '@mui/icons-material/Addchart';
//import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
               <AddchartIcon></AddchartIcon>
           <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Student Registration Form
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
       
      </AppBar>
    </Box>
  );
}