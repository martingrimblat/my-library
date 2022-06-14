const express = require('express');
const router = express.Router();
const { getLibrary } = require('../controllers/books')

router
    .route('/')
    .get(getLibrary);

module.exports = router;
