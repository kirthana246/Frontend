import * as React from 'react';
import { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { shortenURL } from '../api'; // Adjust path if needed

const URLForm: React.FC = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [validMinutes, setValidMinutes] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!originalUrl) return;

    await shortenURL({
      originalUrl,
      customCode,
      validMinutes: validMinutes ? parseInt(validMinutes) : undefined,
    });

    setOriginalUrl('');
    setCustomCode('');
    setValidMinutes('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Original URL"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Custom Code"
          value={customCode}
          onChange={(e) => setCustomCode(e.target.value)}
          fullWidth
        />
        <TextField
          label="Valid Minutes"
          value={validMinutes}
          onChange={(e) => setValidMinutes(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Shorten
        </Button>
      </Stack>
    </form>
  );
};

export default URLForm;