import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface Book {
  id: number;
  name: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

interface BooksState {
  list: Book[];
}

const initialState: BooksState = {
  list: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.list.push({ ...action.payload, id: state.list.length + 1 });
    },
    deleteBook: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      const index = state.list.findIndex((book) => book.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = { ...action.payload };
      }
    },
  },
});

export const { addBook, deleteBook, updateBook } = booksSlice.actions;

export const selectBooks = (state: RootState) => state.books.list;

export default booksSlice.reducer;
