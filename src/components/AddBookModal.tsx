import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Book, addBook } from '../redux/booksSlice';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import 'filepond-plugin-image-preview';
import ImagePreviewPlugin from 'filepond-plugin-image-preview';

registerPlugin(ImagePreviewPlugin);

interface AddBookModalProps {
  onClose: () => void;
  onAddBook: (newBook: Book) => void;
}

const AddBookModal: React.FC<AddBookModalProps> = ({ onClose, onAddBook }) => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState<Book>({
    id: 0,
    name: '',
    price: '',
    category: '',
    description: '',
    image: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleAddBook = () => {
    const image = imageFile ? URL.createObjectURL(imageFile) : '';
    onAddBook({ ...newBook, image });
    setNewBook({
      id: 0,
      name: '',
      price: '',
      category: '',
      description: '',
      image: '',
    });
    setImageFile(null);
  };

  return (
    <div className="modal">
      <div>
        <h2>Add Book</h2>
        <form>
          <div className='add-book-form'>
              <div className='add-book-image-div'>
                <FilePond
                  className="filepond-container"
                  allowMultiple={false}
                  acceptedFileTypes={['image/*']}
                  files={imageFile ? [imageFile] : []}
                  onupdatefiles={(fileItems) => {
                    const file = fileItems[0]?.file as File;
                    setImageFile(file);
                  }}
                />
              </div>
              <div className='add-book-rest'>
                <label>Name</label><br/>
                <input type="text" value={newBook.name} onChange={(e) => setNewBook({ ...newBook, name: e.target.value })} /><br/>
                <label>Price</label><br/>
                <input type="text" value={newBook.price} onChange={(e) => setNewBook({ ...newBook, price: e.target.value })} /><br/>
                <label>Category</label><br/>
                <input type="text" value={newBook.category} onChange={(e) => setNewBook({ ...newBook, category: e.target.value })} /><br/>
                <label>Description</label><br/>
                <textarea value={newBook.description} onChange={(e) => setNewBook({ ...newBook, description: e.target.value })} /><br/>
                
                <button type="button" onClick={handleAddBook}>
                  Add Book
                </button>
                <button type="button" onClick={onClose} className='cancel-add'>
                  Cancel
                </button>
          </div>
          </div>
          
          
        </form>
      </div>
    </div>
  );
};

export default AddBookModal;
