const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: "localhost",
    password: 'm4635105',
    database: 'myLibrarySystem'
});

app.post('/log', (req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const publisher = req.body.publisher;
    const read = req.body.read;

    db.query('INSERT INTO library (title, author, publisher, _read) VALUES (?, ?, ?, ?)', 
    [title, author, publisher, read],
    (err, result) => {
        if(err){
            console.log(err);
        } else {
            res.send("Values Inserted");
        }
    })
})

app.get('/get', (req, res) => {
    db.query('SELECT * FROM library', (err, result) => {
        if(err){
            console.log(err);
        } else {
            res.send(result)
        }
    })
})

app.put('/update', (req, res) => {
    const id = req.body.id;
    const newRead = !req.body.read;
    db.query('UPDATE library SET _read = ? WHERE id = ?',
    [newRead, id],
    (err, res) => {
        if(err){
            console.log(err);
        } else {
            res.send(result)
        }
    })
})

app.listen(3001, () => {console.log("The server is running on port 3001")});