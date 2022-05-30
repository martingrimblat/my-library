import React, { useState } from 'react';
import Axios from 'axios';
import { ReadButton } from './ReadButton';


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
            publisher
        }).then(() => console.log("Success"))
    }
    
    return (
        <div>
            <h2>Log a Book</h2>
            <div>
                <div>
                    <label htmlFor='Title'>Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
                    <label htmlFor='Author'>Author</label>
                    <input type="text" onChange={(e) => setAuthor(e.target.value)}></input>
                    <label htmlFor='Publisher'>Publisher</label>
                    <input type="text" onChange={(e) => setPublisher(e.target.value)}></input>
                </div>
                <ReadButton onClick={() => setRead(current => !current)} />
                <button onClick={addBook}>Log</button>
            </div>
        </div>
  )
}
