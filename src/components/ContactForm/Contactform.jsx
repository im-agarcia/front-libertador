// src/components/ContactForm.js
import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para enviar el formulario
    console.log(formData);
    // Reiniciar el formulario
    setFormData({ name: '', email: '', phone: '', comment: '' });
  };

  return (
    <Box sx={{ my: 4 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Teléfono"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Comentario"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          required
          margin="normal"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Enviar datos
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
