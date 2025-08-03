import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Typography, Button, Container, Box } from '@mui/material';
import ContactUs from './ContactUs';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: { xs: 2, sm: 3 }
        }}
      >
        {!showContact ? (
          <Container maxWidth="md" sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
                mb: { xs: 2, sm: 3 }
              }}
            >
              Welcome to Our SPA
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              paragraph
              sx={{
                fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
                mb: { xs: 3, sm: 4 },
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              A simple React single page application built with Vite and Material-UI
            </Typography>
            <Button 
              variant="contained" 
              size="large" 
              onClick={() => setShowContact(true)}
              sx={{ 
                mt: 3,
                px: { xs: 3, sm: 4 },
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: '1rem', sm: '1.1rem' }
              }}
            >
              Contact Us
            </Button>
          </Container>
        ) : (
          <Box sx={{ width: '100%', position: 'relative' }}>
            <Button
              onClick={() => setShowContact(false)}
              sx={{
                position: 'absolute',
                top: { xs: -10, sm: -20 },
                left: { xs: 10, sm: 20 },
                zIndex: 10
              }}
            >
              ← Back to Home
            </Button>
            <ContactUs />
          </Box>
        )}
      </Box>
    </ThemeProvider>
  )
}

export default App
