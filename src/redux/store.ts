import { configureStore } from '@reduxjs/toolkit';
import booksReducer, { addBook } from './booksSlice';
import reactBook from '../images/react.jpg'
import alchemist from '../images/alchemist.jpg'
import hire from '../images/hire.jpg'
import richest from '../images/richestman.jpg'
import malala from '../images/malala.webp'

const initialBooks = [
  { id: 1, name: 'Learn React', price: '$20', category: 'Science', description: 'Description for Book 1', image: reactBook },
  { id: 2, name: 'The Alchemist', price: '$25', category: 'Fiction', description: 'Description for Book 2', image: alchemist },
  { id: 3, name: 'Hire Me', price: '$130,000', category: 'Senior', description: 'I am a dedicated JavaScript Full-stack Software developer with over 5+ years of professional experience in MongoDB, Express JS, React JS, Redux JS, Node JS (M, E, R, R, N) and many more, seeking full-time employment as a Senior Software developer. ', image: hire },
  { id: 4, name: 'Richest Man', price: '$15', category: 'History', description: 'Description for Book 4', image: richest },
  { id: 5, name: 'Malala', price: '$18', category: 'True Story', description: 'Description for Book 5', image: malala },
];

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

initialBooks.forEach((book) => store.dispatch(addBook(book)));

export type RootState = ReturnType<typeof store.getState>;
