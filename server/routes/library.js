const express = require('express');
const router = express.Router();
const { getLibrary, logBook, deleteBook, updateRead } = require('../controllers/books')

router
    .route('/')
    .get(getLibrary)
    .post(logBook);

router
    .route('/:id')
    .delete(deleteBook)
    .put(updateRead);

module.exports = router;
