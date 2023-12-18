import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addBook, deleteBook, Book, selectBooks } from '../redux/booksSlice';
import AddBookModal from './AddBookModal';

interface BookListProps {
  openBookDetails: (book: Book) => void;
  defaultBookImage: string;
}

const BookList: React.FC<BookListProps> = ({ openBookDetails, defaultBookImage }) => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => selectBooks(state));
  const [isAddBookModalOpen, setAddBookModalOpen] = useState(false);

  const handleDelete = (id: number) => {
    dispatch(deleteBook(id));
  };

  const handleAddBook = (newBook: Book) => {
    dispatch(addBook(newBook));
    setAddBookModalOpen(false);
  };

  return (
    <div>
      <h2>Book List</h2>
      <button onClick={() => setAddBookModalOpen(true)} className='add-book-btn'>+ Add Book +</button>
      <ul className='book-list-ul'>
        {books.map((book) => (
          <li key={book.id}>
            <img src={book.image || defaultBookImage} alt={`Book cover for ${book.name}`} onClick={() => openBookDetails(book)}/>
            <div className='book-list-details'>
              
            <div><strong>Name:</strong> {book.name} </div> <div><strong>Price:</strong> <span className='price'>{book.price} </span></div> <div><strong>Category:</strong> {book.category} </div>

            </div>
          </li>
        ))}
      </ul>
      {isAddBookModalOpen && <AddBookModal onClose={() => setAddBookModalOpen(false)} onAddBook={handleAddBook} />}
    </div>
  );
};

export default BookList;
