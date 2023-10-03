import React from 'react';
import TextField from '@mui/material/TextField';

interface DescriptionFieldComponentI {
  inputRef: React.RefObject<HTMLInputElement | null>;
  defaultValue?: string;
}

const DescriptionFieldComponent: React.FC<DescriptionFieldComponentI> = ({ inputRef, defaultValue }) => (
  <TextField
    autoFocus
    margin="dense"
    name="description"
    label="Book Description"
    type="text"
    fullWidth
    variant="standard"
    rows={4}
    inputRef={inputRef}
    defaultValue={defaultValue}
  />
);

export default DescriptionFieldComponent;
