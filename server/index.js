const express = require('express');
const app = express();
const library = require('./routes/library');
const connectDB = require('./config/db');
const Book = require('./models/Book');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config({path: './config/.env'})

connectDB();

app.use('/library', library);
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
});