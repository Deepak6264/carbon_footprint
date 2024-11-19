import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
const Poster = require('../../../assets/ecosavvy_poster.jpeg');
const FootPrints = require("../../../assets/carbon-footprint.jpg");
const WhyEcosavvy = require("../../../assets/why-ecosavvy.jpg");

// Styled components for image to retain styles
const StyledImage = styled("img")({
  maxWidth: "100%",
  borderRadius: 10,
  height: "auto",
});

const HomePage = () => {
  return (
    <>
      {/* Main Container */}
      <Box
        px={5}
        py={5}
        sx={{ fontSize: "large", backgroundColor: "#007E33", color: "white" }}
      >
        {/* Welcome Section */}
        <Box textAlign="center" mb={5}>
          <Typography variant="h3" component="h1" mb={2}>
            Welcome to Ecosavvy
          </Typography>
          <Typography variant="h6">
            Your Guide to Deepak and Deepesh Living
          </Typography>
        </Box>

        {/* Landscape Image */}
        <StyledImage src={Poster} alt="Landscape" style={{ margin: "0 auto", height: 500, width: 900 }} />

        {/* Introduction Paragraph */}
        <Typography mb={5}>
          Ecosavvy, your comprehensive carbon footprint calculator, empowers
          individuals to gauge and understand their environmental impact. By
          seamlessly quantifying daily activities and lifestyle choices,
          Ecosavvy provides insights into carbon emissions, encouraging users to
          make informed decisions for a more sustainable and eco-friendly
          lifestyle. Start your journey towards reducing your carbon footprint
          and contributing to a greener planet with Ecosavvy today!
        </Typography>

        {/* What is Ecosavvy Section */}
        <Box mb={8} sx={{ display: { md: "flex" }, gap: 5 }}>
          <Box flex={1} mb={{ xs: 6, md: 0 }}>
            <Typography variant="h5" component="h2" mb={2} textAlign="center">
              Hmm.. I'm not sure about what Carbon Footprints are 🤔
            </Typography>
            <Typography>
              A carbon footprint is the total amount of greenhouse gases
              (including carbon dioxide and methane) that are generated by our
              actions. The average carbon footprint for a person in the United
              States is 16 tons, one of the highest rates in the world. Globally,
              the average carbon footprint is closer to 4 tons. To have the best
              chance of avoiding a 2℃ rise in global temperatures, the average
              global carbon footprint per year needs to drop to under 2 tons by
              2050. Lowering individual carbon footprints from 16 tons to 2 tons
              doesn’t happen overnight! By making small changes to our actions,
              like eating less meat, taking fewer connecting flights, and line
              drying our clothes, we can start making a big difference.
            </Typography>
          </Box>
          <Box flex={1}>
            <StyledImage src={FootPrints} alt="Carbon Footprint" />
          </Box>
        </Box>

        {/* Why Choose Ecosavvy Section */}
        <Box mb={8} sx={{ display: { md: "flex" } }}>
          <Box flex={1} sx={{ order: { xs: 2, md: 1 } }}>
            <StyledImage src={WhyEcosavvy} alt="Why Choose Ecosavvy Image" />
          </Box>
          <Box flex={1} ml={{ md: 4 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Typography variant="h5" component="h2" mb={2} textAlign="center">
              Why Choose Ecosavvy?
            </Typography>
            <Typography>
              Choose Ecosavvy for a transformative experience in sustainable
              living. Our user-friendly carbon footprint calculator empowers you
              to make informed choices, helping reduce your environmental impact.
              Ecosavvy offers personalized recommendations, actionable insights,
              and a supportive community committed to eco-conscious living. With
              cutting-edge technology and a passion for sustainability, we make
              it easy for you to adopt a greener lifestyle and contribute to a
              healthier planet. Join Ecosavvy today to be a part of the movement
              towards a more sustainable and environmentally conscious world.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{ backgroundColor: "white", color: "#007E33", py: 4, textAlign: "center", fontWeight: "bold" }}
      >
        Made with 💚 by F1 United
      </Box>
    </>
  );
};

export default HomePage;
