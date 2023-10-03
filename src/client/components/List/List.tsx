import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { useAppSelector } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import { deleteBook } from '../../store/features/bookSlice';
import BookDialog from '../BookDialog/BookDialog';
import { BookI } from '../../types';
import { DialogType } from '../../types/index';
import styles from './list.module.sass';

const List: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<BookI | null>(null)
  const books = useAppSelector(state => state.book.books);
  const dispatch = useAppDispatch();

  const onDeleteHandler = (i: number) => {
    dispatch(deleteBook(i));
  }

  const onCloseHandler = () => {
    setOpen(false);
  }

  const onOpenHandler = (book: BookI) => {
    setSelectedBook(book);
    setOpen(true);
  }

  const onDeleteButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, i: number) => {
    event.stopPropagation();
    onDeleteHandler(i);
  }

  return (
    <>
      {books.map((item, i) => {
        return (
          <div key={i} className={styles.listLine} onClick={() => onOpenHandler(item)}>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.category}</div>
            <Button size="small" onClick={(event) => onDeleteButtonClick(event, i)}>Delete</Button>
          </div>
        )
      })}
      <BookDialog open={open} onClose={onCloseHandler} dialogType={DialogType.MODIFY_BOOK} book={selectedBook} />
    </>
  )
}

export default List;
