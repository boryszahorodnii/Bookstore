import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BooksStateI, BookI, BaseBookI } from '../../types';

const initialState: BooksStateI = {
  books: []
}

export const BookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookI>) => {
      state.books.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        category: action.payload.category,
        description: action.payload.description,
      })
    },
    deleteBook: (state, action: PayloadAction<number>) => {
      if (action.payload >= 0 && action.payload < state.books.length) {
        state.books.splice(action.payload, 1);
      }
    },
    modifyBook: {
      reducer: (state, action: PayloadAction<{ id: number, book: BaseBookI }>) => {
        const { id, book } = action.payload;
        const index = state.books.findIndex((existingBook) => existingBook.id === id);
        if (index !== -1) {
          state.books[index] = {
            ...state.books[index],
            name: book.name,
            price: book.price,
            category: book.category,
            description: book.description,
          };
        }
      },
      prepare: (id: number, book: BaseBookI) => ({
        payload: { id, book },
      }),
    },
  }
});

export default BookSlice.reducer;
export const { addBook, deleteBook, modifyBook } = BookSlice.actions;
