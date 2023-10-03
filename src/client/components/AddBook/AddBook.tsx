import React from 'react'
import Button from '@mui/material/Button';
import BookDialog from '../BookDialog/BookDialog';
import { DialogType } from '../../types/index';

const AddBook: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add a Book
      </Button>
      <BookDialog open={open} onClose={handleClose} dialogType={DialogType.ADD_BOOK} />
    </>
  )
}

export default AddBook;
