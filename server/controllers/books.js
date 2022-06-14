const Book = require('../models/Book');

exports.getLibrary = async (req, res, next) => {
    try {
      const library = await Book.find();
  
      return res.status(200).json({
        success: true,
        count: library.length,
        data: library
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }