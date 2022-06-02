import React, { useState } from 'react';
import Axios from 'axios';


export const Logger = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [read, setRead] = useState(false)

    const addBook = () => {
        Axios.post('http://localhost:3001/log',
        {
            title,
            author,
            publisher,
            read
        }).then(() => console.log("Success"))
    }
    
    return (
        <div className='logger'>
            <div className='container'>
                <h2>Log a Book</h2>
                <div>
                    <label htmlFor='Title'>Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
                    <label htmlFor='Author'>Author</label>
                    <input type="text" onChange={(e) => setAuthor(e.target.value)}></input>
                    <label htmlFor='Publisher'>Publisher</label>
                    <input type="text" onChange={(e) => setPublisher(e.target.value)}></input>
                </div>
                <div className='button-container'>
                    <button className={read ? 'read-button' : 'markAsRead-button'} onClick={() => setRead(read => !read)}>{ read ? "Read" : "Mark as Read" }</button>
                    <button className='log-button' onClick={addBook}>Log</button>
                </div>
            </div>
        </div>
  )
}
