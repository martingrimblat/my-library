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
    const publisher = req.body.author;

    db.query('INSERT INTO library (title, author, publisher) VALUES (?, ?, ?)', 
    [title, author, publisher],
    (err, result) => {
        if(err){
            console.log(err);
        } else {
            res.send("Values Inserted");
        }
    })
})

app.listen(3001, () => {console.log("The server is running on port 3001")});