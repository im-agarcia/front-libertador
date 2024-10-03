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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/d3L-ksklKg4?si=2AXg4o5PjTnImE6d&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
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
        </Box>
      </Box>
    </Box>
  );
};

export default YouTubeAndMapSection;
