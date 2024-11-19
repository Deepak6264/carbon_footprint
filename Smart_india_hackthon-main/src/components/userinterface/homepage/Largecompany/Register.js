import React, { useState } from 'react';
import { Grid, Box, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFormData } from './redux/slices/cardslice'; // Redux action for storing form data
import { postData } from '../FetchNodeAdminServices'; // Import your postData function for API calls

export default function Register() {
  // Initialize state for form fields
  const [companyName, setCompanyName] = useState('');
  const [establishmentDate, setEstablishmentDate] = useState('');
  const [ceoName, setCeoName] = useState('');
  const [industryType, setIndustryType] = useState('');
  const [googleMapLink, setGoogleMapLink] = useState('');
  const [co2Emission, setCo2Emission] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [companyImage, setCompanyImage] = useState({ bytes: '', fileName: '' });
  const [emission, setEmission] = useState('');  // Added Emission field state

  // Redux dispatch to save form data
  const dispatch = useDispatch();

  // Handle image upload
  function handleImage(e) {
    const file = e.target.files[0];
    if (file) {
      setCompanyImage({
        bytes: file,  // Store the file itself
        fileName: URL.createObjectURL(file),  // Preview URL
      });
    }
  }

  // Reset form fields
  const handleReset = () => {
    setCompanyName('');
    setEstablishmentDate('');
    setCeoName('');
    setIndustryType('');
    setGoogleMapLink('');
    setCo2Emission('');
    setState('');
    setCity('');
    setCompanyImage({ bytes: '', fileName: '' });
    setEmission('');  // Reset Emission field
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data object
    const formData = new FormData();
    formData.append('companyName', companyName);
    formData.append('establishmentDate', establishmentDate);
    formData.append('ceoName', ceoName);
    formData.append('industryType', industryType);
    formData.append('googleMapLink', googleMapLink);
    formData.append('co2Emission', co2Emission);
    formData.append('state', state);
    formData.append('city', city);
    formData.append('emission', emission);  // Append Emission field

    // Append the company image file if present
    if (companyImage.bytes) {
      formData.append('companyImage', companyImage.bytes);
    }

   
    // Dispatch form data to Redux store
    dispatch(setFormData({
      companyName,
      establishmentDate,
      ceoName,
      industryType,
      googleMapLink,
      co2Emission,
      state,
      city,
      emission,  // Include emission data
      companyImage: companyImage.fileName,
    }));
    alert("FormData being dispatched:", {
      companyName,
      establishmentDate,
      ceoName,
      industryType,
      googleMapLink,
      co2Emission,
      state,
      city,
      companyImage: companyImage.fileName,
    });

    // Send the form data to the server
    try {
      const response = await postData('large/insert_company', formData);
      if (response.status) {
        alert('Company added successfully!');
        handleReset();  // Reset the form after successful submission
      } else {
        alert('Failed to add company');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting the data.');
    }
  };

  return (
    <div>
      <Box>
        <Box padding={1} margin={16} sx={{ border: '1px solid black', background: '#f5f6fa' }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Company Name Input */}
              <Grid item xs={12} md={4}>
                <TextField
                  label="Enter Company Name"
                  variant="filled"
                  fullWidth
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </Grid>

              {/* Establishment Date Input */}
              <Grid item xs={12} md={4}>
                <TextField
                  label="Establishment Date"
                  variant="filled"
                  fullWidth
                  type="date"
                  value={establishmentDate}
                  onChange={(e) => setEstablishmentDate(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              {/* CEO Name Input */}
              <Grid item xs={12} md={4}>
                <TextField
                  label="CEO Name"
                  variant="filled"
                  fullWidth
                  value={ceoName}
                  onChange={(e) => setCeoName(e.target.value)}
                />
              </Grid>

              {/* Industry Type Input */}
              <Grid item xs={12} md={4}>
                <TextField
                  label="Industry Type"
                  variant="filled"
                  fullWidth
                  value={industryType}
                  onChange={(e) => setIndustryType(e.target.value)}
                />
              </Grid>

              {/* Google Map Link Input */}
              <Grid item xs={12} md={4}>
                <TextField
                  label="Google Map Link"
                  variant="filled"
                  fullWidth
                  value={googleMapLink}
                  onChange={(e) => setGoogleMapLink(e.target.value)}
                />
              </Grid>

              {/* CO2 Emission Input */}
              <Grid item xs={12} md={4}>
                <TextField
                  label="CO2 Emission"
                  variant="filled"
                  fullWidth
                  value={co2Emission}
                  onChange={(e) => setCo2Emission(e.target.value)}
                />
              </Grid>

              {/* Emission Input (Added) */}
              <Grid item xs={12} md={4}>
                <TextField
                  label="Emission"
                  variant="filled"
                  fullWidth
                  value={emission}
                  onChange={(e) => setEmission(e.target.value)} // Added emitter field
                />
              </Grid>

              {/* State and City Inputs */}
              <Grid item xs={12} md={4}>
                <TextField
                  label="State"
                  variant="filled"
                  fullWidth
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  label="City"
                  variant="filled"
                  fullWidth
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>

              {/* File Upload Button */}
              <Grid item xs={12} md={4}>
                <Button variant="contained" component="label" fullWidth>
                  Upload Image
                  <input onChange={handleImage} hidden type="file" accept="image/*" />
                </Button>
              </Grid>
            </Grid>

            {/* Display the uploaded image preview */}
            {companyImage.fileName && (
              <Box mt={2}>
                <img
                  src={companyImage.fileName}
                  alt="Company"
                  style={{
                    width: '100%',
                    maxHeight: '200px',
                    objectFit: 'contain',
                    border: '1px solid black',
                  }}
                />
              </Box>
            )}

            {/* Buttons for Save and Reset */}
            <Grid container spacing={2} sx={{ marginTop: '20px' }}>
              <Grid item>
                <Button type="submit" variant="contained" color="primary">
                  Save
                </Button>
              </Grid>
              <Grid item>
                <Button
                  type="button"
                  variant="contained"
                  color="secondary"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </div>
  );
}
