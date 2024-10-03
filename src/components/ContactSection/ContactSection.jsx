import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const ContactSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5", // Color de fondo gris claro
        padding: "40px 20px", // Espaciado interno
        textAlign: "center", // Centrar el texto
      }}
    >
      <Typography variant="h4" gutterBottom>
        Comunícate con nosotros
      </Typography>

      <Box
        component="form"
        sx={{
          display: "grid",
          gap: 2, // Espacio entre los campos del formulario
          maxWidth: "600px",
          margin: "0 auto", // Centrar el formulario horizontalmente
        }}
      >
        <TextField label="Nombre" fullWidth />
        <TextField label="Email" fullWidth />
        <TextField label="Teléfono" fullWidth />
        <TextField label="Comentario" fullWidth multiline rows={4} />
        <Button variant="contained" color="primary">
          Enviar datos
        </Button>
      </Box>
    </Box>
  );
};

export default ContactSection;
