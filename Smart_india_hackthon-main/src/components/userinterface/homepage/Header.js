import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextBoxSearch from './TextBoxSearch';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  function Openabout() {
    navigate('/about');
  }

  function Openhomepage() {
    navigate('/');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor:'#78e08f' }}>
        <Toolbar>
          {/* {!matches && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )} */} 
               {/* /* icon tripe line aati hai */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Typography variant="h6" component="div" style={{ display: 'flex', alignItems: 'center' }}>
              {/* <img src={logo} style={{width:70,height:70}} /> */}
              <Button
                onClick={Openhomepage}
                sx={{ color: 'white', fontWeight: 'bold', fontSize: 24 }}
              >
                EcoSavy
              </Button>
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center' ,}}>
            <Button
              onClick={()=>{navigate('/register')
              }}
              sx={{
                color: 'white',
                fontSize: '15px',
              
                mx: matches ? 2 : 1,
              }}
            >
             Register
            </Button>
            <Button
              onClick={Openabout}
              sx={{
                color: 'white',
                fontSize: '15px',
              
                mx: matches ? 2 : 1,
              }}
            >
              About
            </Button>
           

            
            

              <IconButton
                edge="start"
                color="inherit"
                aria-label="account"
                sx={{ display: 'flex', alignItems: 'center' }}
                onClick={()=>{navigate('/login')}}
              >
                <AccountCircleIcon style={{ fontSize: 30 }} />
                <div style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 16 }}>Sign In</div>
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>

     
    </Box>
  );
}
