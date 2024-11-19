import Header from './Header';
import Scrollimage from './scrollimage';
import { Grid, Box } from '@mui/material';
import Largescale from './Largescale';
import { useNavigate } from 'react-router-dom';
import Toptable from './Toptable';
import { WidthFull } from '@mui/icons-material';
import Footer from './Footer'

export default function HomePage() {
    const navigate = useNavigate();
function Opencalculator(){
    
    navigate('/largescalecalculator');
}    

function Usercalculator(){
    navigate('/usercalculator');
}
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
           
           <div style={{width:'82.6%',alignSelf:'center',marginTop:35}} >
        <Scrollimage  />
        </div>

            <Grid container spacing={2} alignItems="stretch" sx={{marginTop:'50px',width:'82.6%',alignSelf:'center'}}>
                <Grid item xs={12} md={4}>
                    <Box style={{ height: '100%', marginTop: '20px' }}>
                    <Largescale
        title="At User Level"
        description="Register your Industries To receive your carbon efficiency."
        image="userscale.jpg"  // Make sure this image is in the public folder
        buttonText="Calculate"
        onButtonClick={Usercalculator}  // Function to handle button click
      />
                    </Box>
                </Grid>
                <Grid item xs={12}  md={4}>
                    <Box style={{ height: '100%', marginTop: '20px' }}>
                    <Largescale
        title="Small Scale Industries"
        description="Register your Industries To receive your carbon efficiency."
        image="smallscale.jpg"  // Make sure this image is in the public folder
        buttonText="Register"
        onButtonClick={Opencalculator}  // Function to handle button click
      />
                   </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box style={{ height: '100%', marginTop: '20px' }}>
                    <Largescale
        title="Large Scale Industries"
        description="Register your Industries to receive your carbon efficiency."
        image="largescale.jpg"  // Make sure this image is available in the public folder
        buttonText="Register"
        onButtonClick={Opencalculator}
        
      />
                    </Box>
                </Grid>
                </Grid>
                {/* <Grid item xs={12} sm={2} md={2}>
                    <Box style={{ height: '100%' }}>
                        <Toptable />
                    </Box>
                </Grid> */}
          

            
            <Grid sx={{width:'95.6%',alignSelf:'center'}}>
                <Grid item xs={12} sx={{marginTop:'90px' }}>

                        <Footer></Footer>
                    
                </Grid>
            </Grid>
        </div>
    );
}
