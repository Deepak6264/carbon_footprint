import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button, Grid } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useParams, useNavigate } from 'react-router-dom';
import { getData, postData } from '../userinterface/homepage/FetchNodeAdminServices'; // Your fetch function
import Swal from "sweetalert2";
export default function CompanyCard() {
  const { companyId } = useParams(); // Get companyId from route
  const [companyData, setCompanyData] = useState(null); // State for company data
  const [error, setError] = useState(null); // State for error
  const [message, setMessage] = useState(''); // State to show success/error message
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await getData(`large/get_company_details/${companyId}`); // Replace with your API endpoint
        
        if (response.status) {
          setCompanyData(response.data);
          console.log(response.data); // For debugging purposes
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError('Failed to fetch company details.');
      }
    };

    fetchCompanyDetails();
  }, [companyId]);

  const handleVerify = async () => {
    try {
      const response = await postData(`large/insert_verification/${companyId}`, { status: 'Verified' }); // Updated API endpoint for verification
      if (response.status) {
        setMessage('Company verified successfully!');
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Company verified successfully!",
          showConfirmButton: true,
          timer: 3000,
          toast: true,
        });
      } else {
        setMessage('Failed to verify company.');
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: 'Failed to verify company.',
          showConfirmButton: false,
          timer: 1500,
          toast: true,
        });
      }
    } catch (err) {
      setMessage('Error occurred while verifying the company.');
    }
  };

  const handleReject = async () => {
    try {
      const response = await postData(`large/insert_verification/${companyId}`, { status: 'Rejected' }); // Updated API endpoint for rejection
      if (response.status) {
        setMessage('Company rejected successfully!');
        setMessage('Company verified successfully!');
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:'Company rejected successfully!',
          showConfirmButton: true,
          timer: 1500,
          toast: true,
        });

      } else {
        setMessage('Failed to reject company.');
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: 'Failed to reject company.',
          showConfirmButton: false,
          timer: 1500,
          toast: true,
        });
      }
    } catch (err) {
      setMessage('Error occurred while rejecting the company.');
    }
  };

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
          alt={companyData.company_name}
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
              onClick={handleVerify} // Call handleVerify on click
            >
              Verify
            </Button>

            {/* Reject Button */}
            <Button
              variant="contained"
              color="error"
              sx={{ marginTop: '75px' }}
              onClick={handleReject} // Call handleReject on click
            >
              Reject
            </Button>
          </Grid>

          {/* Show success/error message */}
          {message && (
            <Typography variant="h6" color="text.secondary" sx={{ marginTop: '20px', textAlign: 'center' }}>
              {message}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
