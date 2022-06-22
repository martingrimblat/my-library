const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/.env' });

connectDB();

const library = require('./routes/library');
const app = express();

app.use(express.json());
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  app.use('/library', library);
  
  if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
  }

  if(process.env.NODE_ENV = 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

  

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`.yellow.bold)
});