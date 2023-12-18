import './App.css'
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import BookList from './components/BookList';
import AddBookModal from './components/AddBookModal';
import BookDetailsModal from './components/BookDetailsModal';
import { Book } from './redux/booksSlice';
import Header from './components/Header';

export const defaultBookImage =
  'https://www.seekpng.com/png/detail/238-2389220_white-papers-default-book.png';

const App: React.FC = () => {
  const [isAddBookModalOpen, setAddBookModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const openBookDetails = (book: Book) => {
    setSelectedBook(book);
  };

  const closeBookDetails = () => {
    setSelectedBook(null);
  };

  const handleAddBook = (newBook: Book) => {
    setAddBookModalOpen(false);
  };

  const handleUpdateBook = (updatedBook: Book) => {
    console.log('Updated Book:', updatedBook);
  };

  return (
    <Provider store={store}>
      <div>
        <Header/>
        <div className='book-content'>
          <BookList openBookDetails={openBookDetails} defaultBookImage={defaultBookImage} />

          {isAddBookModalOpen && (
            <AddBookModal onClose={() => setAddBookModalOpen(false)} onAddBook={handleAddBook} />
          )}
          {selectedBook && (
            <BookDetailsModal book={selectedBook} onClose={closeBookDetails} onUpdateBook={handleUpdateBook} />
          )}
        </div>
        
      </div>
    </Provider>
  );
};

export default App;
