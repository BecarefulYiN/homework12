import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Profile from './../assets/Profile.jpg'
import { Container } from '@mui/system';
import Typography  from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function Login() {
  const navigate = useNavigate()
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is already logged in based on session storage
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      navigate(`/home?UN=${storedUsername}`);
    }
  }, [navigate]);



  const handleLogin = () => {
    // Check if the username and password match the specified values
    if (Username === 'Wai Yan Oo' && Password === '1234') {
      // Store username in session storage
      sessionStorage.setItem('username', Username);
      navigate(`/home?UN=${Username}`);
    } else {
      setError('Incorrect username or password');
      setUsername('');
      setPassword('');
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError('');
  };


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  return (
    <Box sx={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#b8b6b6'}}>
      <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      width: 'auto',
      height: 'auto',
      padding: '20px',
      gap: '20px'
    }}>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{
          width: '7vw',
          height : '7vw',
        }} alt="Profile" src={Profile} />
      </Stack>
      <Typography sx={{
          fontSize: '2vw',
          fontWeight: 'bold'
        }} variant='h2'>Login</Typography>

      <TextField
          required
          id="outlined-required"
          label="User name"
          defaultValue=""
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          placeholder='Type your username'
          sx={{
            width: '20vw',
            '& input:focus': {
              borderColor: 'transparent',
              backgroundColor: 'transparent' // Set the border color to transparent on focus
            },
          }}
          onChange={handleUsernameChange}
      />

      <TextField
          required
          id="outlined-required"
          label="Passwords"
          defaultValue=""
          type='password'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOpenIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            width: '20vw',
            '& input:focus': {
              borderColor: 'transparent', // Set the border color to transparent on focus
            },
          }}
          placeholder='Type your password'
          onChange={handlePasswordChange}
      />

      {error && <Typography variant='p' sx={{ color: 'red' }}>{error}</Typography>}

      <Typography variant='p' sx={{justifySelf: 'flex-end'}}>Forget password?</Typography>

      <Button sx={{
        width: '10vw'
      }} variant="contained" disabled={!Username || !Password} onClick={handleLogin}>Login</Button>

      
    </Container>
    </Box>
  )
}

export default Login
