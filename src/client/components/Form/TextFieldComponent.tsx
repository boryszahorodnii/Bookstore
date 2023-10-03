import React from 'react';
import TextField from '@mui/material/TextField';

interface TextFieldComponentI {
  inputRef: React.RefObject<HTMLInputElement | null>;
  defaultValue?: string;
}

const TextFieldComponent: React.FC<TextFieldComponentI> = ({ inputRef, defaultValue }) => (
  <TextField
    autoFocus
    defaultValue={defaultValue}
    margin="dense"
    name="name"
    label="Book Name"
    type="text"
    fullWidth
    variant="standard"
    inputRef={inputRef}
  />
);

export default TextFieldComponent;
