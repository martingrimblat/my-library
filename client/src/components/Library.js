import Axios from 'axios';
import React, { useState } from 'react';

export const Library = () => {
  const [library, setLibrary] = useState([]);
  
  const getLibrary = async () => {
    const res = await Axios.get('https://my-library-heroku.herokuapp.com/get');
    setLibrary(res.data);
  }

  getLibrary();

  const toggleRead = (read, id) => {
    Axios.put('https://my-library-heroku.herokuapp.com/update',
    {
      read,
      id
    }).then(response => {
      setLibrary(library.map(val => {
        return val.id == id
        ? {
          ...val,
          _read: !read
        } : val
      }))
    })
  }

  const deleteBook = (id) => {
    Axios.delete(`https://my-library-heroku.herokuapp.com/${id}`).then(
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
            <li key={book.id}>
                <div className='book'> 
                <div className='book-content'>
                  <div className='book-info'>
                    <p className='title'>{book.title}</p>
                    <p className='author'>{book.author}</p>
                    <p className='publisher'>{book.publisher}</p>
                  </div>
                  <div className='book-buttons'>
                    <button className={book._read ? 'read-button small' : 'markAsRead-button small'}
                     onClick={() => toggleRead(book._read, book.id)}>
                       {book._read ? 'Read' : 'Mark as Read'}
                    </button>
                    <button className='delete-button' onClick={() => deleteBook(book.id)}>X</button>
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
