const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

require('dotenv').config({path: './config/.env'})

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    user: 'b8c942c583cf0c',
    host: "us-cdbr-east-05.cleardb.net",
    password: '371761aa',
    database: 'heroku_b713796b166752a'
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
    (err, result) => {
        if(err){
            console.log(err);
        } else {
            res.send("Value Updated")
        }
    })
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM library WHERE id = ?", id,
    (err, result) => {
        if(err){
            console.log(err);
        } else {
            res.send("Book deleted")
        }
    })
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
});