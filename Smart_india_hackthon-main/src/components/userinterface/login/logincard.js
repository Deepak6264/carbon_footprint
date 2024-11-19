import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { postData } from '../homepage/FetchNodeAdminServices';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    // Validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
    }
    if (password.length < 6) {
      setPasswordError(true);
    }

    // Proceed if no validation errors
    if (!emailError && !passwordError) {
      try {
        const payload = { email, emob: email, password };
        const response = await postData('large/login', payload);
        alert(JSON.stringify(response));

        if (response.status) {
          navigate('/');
        } else {
          alert('Invalid credentials');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred during login');
      }
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(/green.webp)',
        backgroundSize: 'cover',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400,
          borderRadius: 3,
          backgroundColor: 'transparent',
          backdropFilter: 'blur(50px)',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? 'Enter a valid email address' : ''}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
              helperText={passwordError ? 'Password must be at least 6 characters' : ''}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => navigate('/create')}
            >
              Create Account
            </Button>
          </form>
        </Box>
      </Paper>
    </Box>
  );
}
