import Axios from 'axios';
import React, { useState } from 'react';

export const Library = () => {
  const [library, setLibrary] = useState([]);
  
  const getLibrary = async () => {
    const res = await Axios.get('http://localhost:3001/get');
    setLibrary(res.data);
  }

  const toggleRead = (read, id) => {
    Axios.put('http://localhost:3001/update',
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

  const deleteBook = () => {

  }

  return (
    <div>
      <button onClick={() => {
        getLibrary()
        }} />
      <div>
        {library.map(book => {
          return <li key={book.id}>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.publisher}</p>
            <p>{book._read ? 'Read' : 'Not Read'}</p>
            <button onClick={toggleRead(book._read, book.id)}>{book._read ? 'Read' : 'Mark as Read'}</button>
            <button onClick={deleteBook}>X</button>
          </li>
        })} 
      </div>
    </div>
  )
}
