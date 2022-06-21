import Axios from 'axios';
import React, { useState } from 'react';

export const Library = () => {
  const [library, setLibrary] = useState([]);
  
  const getLibrary = async () => {
    const res = await Axios.get('http://localhost:3001/library');
    setLibrary(res.data.data);
  }

  getLibrary();

  const toggleRead = (read, id) => {
    Axios.put(`http://localhost:3001/library/${id}`, {read}).then(response => {
      setLibrary(library.map(val => {
        return val.id == id
        ? {
          ...val,
          read: !this.read
        } : val
      }))
    })
  }

  const deleteBook = (id) => {
    Axios.delete(`http://localhost:3001/library/${id}`).then(
      setLibrary(library.filter(
        (val) => {
          return val.id !== id;
        }
      ))
    )
  }

  return (
    <div className='library'>
      <div>
        {library.map(book => {
          return(
            <li key={book._id}>
                <div className='book'> 
                <div className='book-content'>
                  <div className='book-info'>
                    <p className='title'>{book.title}</p>
                    <p className='author'>{book.author}</p>
                    <p className='publisher'>{book.publisher}</p>
                  </div>
                  <div className='book-buttons'>
                    <button className={book.read ? 'read-button small' : 'markAsRead-button small'}
                     onClick={() => toggleRead(book.read, book._id)}>
                       {book.read ? 'Read' : 'Mark as Read'}
                    </button>
                    <button className='delete-button' onClick={() => deleteBook(book._id)}>X</button>
                  </div>
                </div>
              </div>
            </li>
            )
        })} 
      </div>
    </div>
  )
}
