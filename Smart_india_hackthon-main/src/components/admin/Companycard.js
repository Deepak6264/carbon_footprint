import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button, Grid } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useParams, useNavigate } from 'react-router-dom';
import { getData } from '../userinterface/homepage/FetchNodeAdminServices'; // Your fetch function

export default function CompanyCard() {
  const { companyId } = useParams(); // Get companyId from route
  const [companyData, setCompanyData] = useState(null); // State for company data
  const [error, setError] = useState(null); // State for error
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      alert(companyId)
      try {
        const response = await getData(`large/get_company_details/${companyId}`); // Replace with your API endpoint
        
        if (response.status) {
          setCompanyData(response.data);
          // For debugging purposes, you can check the data with an alert
          console.log(response.data);
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError('Failed to fetch company details.');
      }
    };

    fetchCompanyDetails();
  }, [companyId]);

  // Show loading screen if companyData is null and no error
  if (!companyData && !error) return <div>Loading...</div>;

  // Show error message if there's an error
  if (error) return <div>Error: {error}</div>;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Card sx={{ width: 900, boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="180"
          image={require('./carbon-footprint.jpg')} // Use dynamic company image or placeholder
          alt={companyData.companyName}
        />
        <CardContent>
          <Grid sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography gutterBottom variant="h4" component="div">
              {companyData.company_name}
            </Typography>
            <Button sx={{ marginBottom: '10px' }} onClick={() => window.open(companyData.googleMapLink, '_blank')}>
              <img
                src="google-maps.png"
                alt="Google Maps"
                style={{ width: '24px', height: '24px' }}
              />
            </Button>
          </Grid>

          <Typography variant="body1" color="text.secondary" paragraph>
            Address: {companyData.city || 'No address available'}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Established: {companyData.establishment_date || 'Not available'}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            CEO: {companyData.ceo_name || 'Not available'}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Industry: {companyData.type || 'Not available'}
          </Typography>

          {/* Carbon Release Graph */}
          {companyData.emissionData && companyData.emissionData.length > 0 && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" component="div" gutterBottom>
                Carbon Release (tons)
              </Typography>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={companyData.emission}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="carbon" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          )}

          <Grid
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            {/* Verify Button */}
            <Button
              variant="contained"
              color="success"
              sx={{ marginTop: '75px' }}
              onClick={() => navigate("/")} // Redirect to verify page
            >
              Verify
            </Button>

            {/* Reject Button */}
            <Button
              variant="contained"
              color="error"
              sx={{ marginTop: '75px' }}
              onClick={() => navigate("/")} // Redirect to reject page
            >
              Reject
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
