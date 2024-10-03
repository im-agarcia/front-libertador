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
            paddingBottom: "56.25%", // Para mantener el aspecto 16:9 del video
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
            margin: "0 auto", // Centrar el video
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/d3L-ksklKg4" 
              frameBorder="0" 
              allowFullScreen 
              title="YouTube Video"
            ></iframe>
          </Box>
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
            src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_LINK"
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
