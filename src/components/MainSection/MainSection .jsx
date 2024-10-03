import React from "react";
import { Box, Typography, Button } from "@mui/material";

const MainSection = () => {
  return (
    <Box
      sx={{
        position: "relative", // Necesario para el overlay del texto
        height: "90vh", // Altura de la sección
        backgroundImage: 'url("/path/to/your/image.jpg")', // Ruta a la imagen
        backgroundSize: "cover", // Para que la imagen cubra todo el contenedor
        backgroundPosition: "center", // Centrar la imagen
        display: "flex", // Para centrar el contenido
        justifyContent: "center", // Centrado horizontal
        alignItems: "center", // Centrado vertical
      }}
    >
      {/* Contenido (texto y botón) */}
      <Box
        sx={{
          textAlign: "center", // Centrar el texto
          color: "#fff", // Color de texto blanco
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro transparente para mejor legibilidad
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Una iglesia hacia todos
        </Typography>
        <Typography variant="h6" gutterBottom>
          Te esperamos los domingos a las 11hs en Av. Libertador 8650
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2 }} // Margen superior para separar el botón del texto
        >
          Ver agenda
        </Button>
      </Box>
    </Box>
  );
};

export default MainSection;
