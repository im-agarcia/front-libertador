// src/components/YouTubeAndMapSection.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const YouTubeAndMapSection = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", padding: "40px 20px" }}>
      {/* YouTube */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Suscríbete a nuestro canal de YouTube
        </Typography>
        <Box
          sx={{
            position: "relative",
            paddingBottom: "56.25%", // Mantener el aspecto 16:9 del video
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
            margin: "0 auto", // Centrar el video
          }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/d3L-ksklKg4"
            frameBorder="0"
            allowFullScreen
            title="YouTube Video"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          ></iframe>
        </Box>
      </Box>

      {/* Mapa */}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Ubicación
        </Typography>
        <Box
          sx={{
            position: "relative",
            paddingBottom: "56.25%", // Aspecto 16:9
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
            margin: "0 auto",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509895!2d144.9537363153156!3d-37.81720997975163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11cb37%3A0x5045675218ce6e0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1612856814841!5m2!1sen!2sau"
            width="600"
            height="450"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default YouTubeAndMapSection;
