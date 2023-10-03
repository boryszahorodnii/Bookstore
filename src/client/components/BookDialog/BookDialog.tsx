import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import idGenerator from '../../../helpers/idGenerator';
import { useAppDispatch } from '../../store/store';
import { addBook, modifyBook } from '../../store/features/bookSlice';
import { TextFieldComponent, PriceFieldComponent, CategorySelectComponent, DescriptionFieldComponent } from '../Form';
import { DialogType, BookI } from '../../types/index';

import { Category } from '../../types';

interface BookDialogI {
  open: boolean;
  dialogType: DialogType;
  book?: BookI | null;
  onClose: () => void;
}

const BookDialog: React.FC<BookDialogI> = ({ open, dialogType, book, onClose }) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);
  const categoryRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLInputElement | null>(null);
  const categories = [Category.ACTION, Category.DOCUMENTARY, Category.DRAMA, Category.HORRON, Category.WESTERN];
  const dispatch = useAppDispatch();

  const handleClose = () => {
    onClose();
  };

  const onSubmitHandler = () => {
    const name = nameRef.current?.value;
    const price = priceRef.current?.value;
    const category: Category = categoryRef.current?.value as Category;
    const description = descriptionRef.current?.value || '';

    if (!name || !price) return;

    if (dialogType === DialogType.ADD_BOOK) {
      dispatch(addBook({ id: idGenerator(), name, price: Number(price), category, description }));
    }
    if (dialogType === DialogType.MODIFY_BOOK && book) {
      dispatch(modifyBook(book.id, { name, price: Number(price), category, description }));
    }
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      {dialogType === DialogType.ADD_BOOK ? (
        <DialogTitle>Add a New Book</DialogTitle>
      ) : (
        <DialogTitle>Modify a Book</DialogTitle>
      )}
      <DialogContent>
        <TextFieldComponent inputRef={nameRef} defaultValue={book?.name} />
        <PriceFieldComponent inputRef={priceRef} defaultValue={book?.price} />
        <CategorySelectComponent inputRef={categoryRef} defaultValue={Category.ACTION} categories={categories} />
        <DescriptionFieldComponent inputRef={descriptionRef} defaultValue={book?.description} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onSubmitHandler}>
          {dialogType === DialogType.ADD_BOOK ? 'Add' : 'Modify'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookDialog;
