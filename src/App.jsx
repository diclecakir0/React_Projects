import { useState } from 'react';
import BookCard from './components/bookCard';
import { toast } from 'react-toastify';
import EditModal from './components/EditModal';

function App() {
  const [bookName, setBookName] = useState('');
  const [books, setBooks] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  

  console.log(showEditModal, editItem)

  // It triggers when the "Add" button is clicked
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bookName) {
      // A notification pops up
      toast.warn('Please enter the book name', {autoClose: 2000});
      return;
    }

   // ! Creating an object with the necessary information for the book
   const newBook = {
      id: new Date().getTime(),
      title: bookName,
      date: new Date().toLocaleString(),
      isRead: false,
   };
   // Transfer the created book object to the books array (use the spread operator to preserve existing items)
   setBooks([...books, newBook]);

   //Reset the input field after adding an element
   setBookName('');

   // A notification pops up
   toast.success('Book Added!', {autoClose:2000});
  };

  // Open and close the modal
  const handleModal = (id) => {
    // Transfer the ID to the state
    setDeleteId(id);
    //Opening the modal
    setShowConfirm(true);
  };
  console.log(showConfirm);

  // It triggers when the "Delete" button is pressed
  const handleDelete = (deletingId) => {
    // Get the objects that do not match the given ID and store them in an array
    const filtred = books.filter((item) => item.id !== deletingId);
    // Assign the resulting array to the state
    setBooks(filtred);
    // Show a notification
    toast.error('Book Deleted', {autoClose:2000})
  };

   // It triggers when the "Read" button is pressed;
  // 1- Toggle the "read" value
  // 2- Create a copy of the books array
  // 3- Find the index of the book to be updated in the array
  // 4- Remove the old book from the copied array and replace it with the updated version
  // 5- Update the state with the modified copied array
  const handleRead = (book) => {
    // okundu değerini tersine çevir
   const updatedBook = {...book, isRead: !book.isRead};

   const cloneBooks = [...books];

   const index = cloneBooks.findIndex((item) => item.id === book.id);

   cloneBooks.splice(index, 1, updatedBook);

   setBooks(cloneBooks);
 };

  // Update the book
  const handleEditBook = () => {
    // Find the index of the element to be changed in the array
    const index= books.findIndex((book) => book.id === editItem.id);
    // Create a copy of the books array
    const cloneBooks = [...books];
    // Remove the old book from the array and replace it with the new one
    cloneBooks.splice(index, 1, editItem);
    // Update the state by assigning the copied array to the state
    setBooks(cloneBooks);
    // Close the modal
    setShowEditModal(false);
  };

 
  
  return (
    <>
    {/*HEADER*/}
     <div className='bg-dark text-light px-5 py-2 fs-5 text-center'>REACT CRUD APP</div>

    {/*CONTAINER FORM*/} 
    <div className='container border'>
      {/*FORM*/} 
      <form onSubmit={handleSubmit} className='d-flex gap-3 mt-4'>  
        <input value={bookName} onChange={(e)=> setBookName(e.target.value)} className='form-control shadow' type='text'/>
        <button className='btn btn-warning shadow'>Add</button>
      </form>

      <div className='d-flex flex-column gap-3 py-5'>
        {/* If the state is empty, display a message on the screen*/}
        {books.length === 0 && <h4>No books have been added yet</h4>}
        {/*If there is data in the state, list it on the screen*/}
        {books.map((book) => (
          <BookCard key={book.id} book={book} handleModal={handleModal} handleRead={handleRead} setShowEditModal={setShowEditModal} setEditItem={setEditItem}/>
        ))}
      </div>
    </div>
    {/* Define the modal */}
    {showConfirm && (
      <div className='confirm-modal'>
        <div className='modal-inner'>
        <h5>Do you want to delete it?</h5>
        <button className='btn btn-warning' onClick={() => setShowConfirm(false)}>Cancel</button>
        <button className='btn btn-danger shadow' onClick={() => {handleDelete(deleteId);
                                setShowConfirm(false);
        }}>Confirm</button>
      </div>
      </div>
    )}
    {/*The modal that will open when the "Edit" button is clicked*/}
    {showEditModal && <EditModal setShowEditModal={setShowEditModal} setEditItem={setEditItem} editItem={editItem} handleEditBook={handleEditBook}/>}
    </>
  );
}

export default App;
