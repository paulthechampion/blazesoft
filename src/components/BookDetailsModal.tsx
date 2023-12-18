import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBook, deleteBook, Book } from '../redux/booksSlice';
import { defaultBookImage } from '../App';

interface BookDetailsModalProps {
  book: Book;
  onClose: () => void;
  onUpdateBook: (updatedBook: Book) => void;
}

const BookDetailsModal: React.FC<BookDetailsModalProps> = ({ book, onClose, onUpdateBook }) => {
  const dispatch = useDispatch();
  const [isUpdateMode, setUpdateMode] = useState(false);
  const [updatedBook, setUpdatedBook] = useState<Book>(book);

  const handleUpdateBook = () => {
    const updatedBookWithoutImage = { ...updatedBook, image: book.image };
  
    dispatch(updateBook(updatedBookWithoutImage));
  
    onClose();
  };

  const handleDeleteBook = () => {
    dispatch(deleteBook(book.id));
    onClose();
  };

  return (
    <div className="modal">
      <div className="book-details-main">
      <h2>{isUpdateMode ? 'Update Book' : 'Book Details'}</h2>
        {isUpdateMode ? (
          <form className='update-book-form'>
            <label>Name:</label>
            <input
              type="text"
              value={updatedBook.name}
              onChange={(e) => setUpdatedBook((prevBook) => ({ ...prevBook, name: e.target.value }))}
            />
            <label>Price:</label>
            <input
              type="text"
              value={updatedBook.price}
              onChange={(e) => setUpdatedBook((prevBook) => ({ ...prevBook, price: e.target.value }))}
            />
            <label>Category:</label>
            <input
              type="text"
              value={updatedBook.category}
              onChange={(e) => setUpdatedBook((prevBook) => ({ ...prevBook, category: e.target.value }))}
            /><br/>
            <label className='update-description'>Description:</label>
            <textarea
              value={updatedBook.description}
              onChange={(e) => setUpdatedBook((prevBook) => ({ ...prevBook, description: e.target.value }))}
            />
            <button type="button" onClick={handleUpdateBook} className='update-update-btn'>
              Update Book
            </button>
            <button type="button" onClick={() => setUpdateMode(false)} className='cancel-update-btn'>
              Cancel Update
            </button>
            <button onClick={onClose} className="close">
                Close
            </button>
          </form>
        ) : (
          <div className="book-details-inner">
            <div className="book-details-img-div">
              <img src={book.image || defaultBookImage} alt={`Book cover for ${book.name}`} />
            </div>
            <div className="book-detials-details">
              <p>Name: {book.name}</p>
              <p>
                Price: <span className="price">{book.price}</span>
              </p>
              <p>Category: {book.category}</p>
              <p>Description: {book.description}</p>
              <button onClick={() => setUpdateMode(true)} className="update-btn">
                Update Book
              </button>
              <button onClick={handleDeleteBook} className="delete-btn">
                Delete Book
              </button>
              <button onClick={onClose} className="close">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetailsModal;
