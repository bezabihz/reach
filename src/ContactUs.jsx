import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Alert
} from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 2, sm: 4 }
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{ 
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            mb: { xs: 2, sm: 3 }
          }}
        >
          Contact Us
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary" 
          align="center" 
          paragraph
          sx={{ 
            fontSize: { xs: '1rem', sm: '1.25rem' },
            mb: { xs: 3, sm: 4 },
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
              {showSuccess && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you for your message! We'll get back to you soon.
                </Alert>
              )}
              <form onSubmit={handleSubmit}>
                <Grid container spacing={{ xs: 2, sm: 3 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{ 
                        mt: 2,
                        py: { xs: 1.5, sm: 2 },
                        fontSize: { xs: '1rem', sm: '1.1rem' }
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 }, height: 'fit-content' }}>
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
              >
                Get in Touch
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, flexWrap: 'wrap' }}>
                <Email sx={{ mr: 2, color: 'primary.main', minWidth: 24 }} />
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, wordBreak: 'break-word' }}>
                  contact@example.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, flexWrap: 'wrap' }}>
                <Phone sx={{ mr: 2, color: 'primary.main', minWidth: 24 }} />
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <LocationOn sx={{ mr: 2, color: 'primary.main', minWidth: 24, mt: 0.5 }} />
                <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  123 Main St, City, State 12345
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;