import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
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

function Home() {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 2, sm: 4 }
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center', px: { xs: 2, sm: 3 } }}>
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
          component={Link} 
          to="/contact" 
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
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar sx={{ px: { xs: 1, sm: 2 } }}>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                flexGrow: 1,
                fontSize: { xs: '1.1rem', sm: '1.25rem' }
              }}
            >
              React SPA
            </Typography>
            <Button 
              color="inherit" 
              component={Link} 
              to="/"
              sx={{ 
                fontSize: { xs: '0.85rem', sm: '0.875rem' },
                px: { xs: 1, sm: 2 }
              }}
            >
              Home
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/contact"
              sx={{ 
                fontSize: { xs: '0.85rem', sm: '0.875rem' },
                px: { xs: 1, sm: 2 }
              }}
            >
              Contact
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
