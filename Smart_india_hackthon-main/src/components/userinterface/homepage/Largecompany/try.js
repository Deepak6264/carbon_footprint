import { useSelector } from 'react-redux';

const DisplayCompanyInfo = () => {
  // Access form data from the Redux store
  const formData = useSelector((state) => state.card.formData); // Make sure you access `formData` correctly

  // Display the formData in an alert for debugging purposes
  console.log(formData);  // This will log the entire formData object to the console
  alert(JSON.stringify(formData, null, 2));  // This will show the formData in an alert in a readable format

  return (
    <div>
      <h2>Company Information</h2>
      <p><strong>Company Name:</strong> {formData.companyName}</p>
      <p><strong>Establishment Date:</strong> {formData.establishmentDate}</p>
      <p><strong>CEO Name:</strong> {formData.ceoName}</p>
      <p><strong>Industry Type:</strong> {formData.industryType}</p>
      <p><strong>Google Map Link:</strong> {formData.googleMapLink}</p>
      <p><strong>CO2 Emission:</strong> {formData.co2Emission}</p>
      <p><strong>State:</strong> {formData.state}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>Emission:</strong> {formData.emission}</p>
      {formData.companyImage && <img src={formData.companyImage} alt="Company Image" />}
    </div>
  );
};

export default DisplayCompanyInfo;
