// src/components/YouTubeSection.js
import React from 'react';
import { Box } from '@mui/material';

const YouTubeSection = () => {
  return (
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
  );
};

export default YouTubeSection;
