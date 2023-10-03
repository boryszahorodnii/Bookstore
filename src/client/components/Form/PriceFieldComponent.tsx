import React from 'react';
import TextField from '@mui/material/TextField';

interface PriceFieldComponentI {
  inputRef: React.RefObject<HTMLInputElement | null>;
  defaultValue?: number;
}

const PriceFieldComponent: React.FC<PriceFieldComponentI> = ({ inputRef, defaultValue }) => (
  <TextField
    autoFocus
    defaultValue={defaultValue}
    margin="dense"
    name="price"
    label="Book Price"
    type="number"
    fullWidth
    variant="standard"
    inputRef={inputRef}
  />
);

export default PriceFieldComponent;
