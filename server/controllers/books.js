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

  exports.logBook = async (req, res, next) => {
    try {
      const { title, author, publisher, read } = req.body;

      const book = await Book.create(req.body);

      return res.status(201).json({
        success: true,
        data: book
      })
    } catch (err) {
      if(err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map(val => val.message);
  
        return res.status(400).json({
          success: false,
          error: messages
        });
      } else {
          return res.status(500).json({
            success: false,
            error: 'Server Error'
          });
        }
      }
    }

  exports.deleteBook = async (req, res, next) => {
    try {
      const book = await Book.findById(req.params.id);

      if(!book) {
        return res.status(404).json({
          success: false,
          error: 'No transaction found'
        })
      }

      await book.remove();

      return res.status(200).json({
        success: true,
        data: {}
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }

  exports.updateRead = async (req, res, next) => {
    try {
      const toUpdate = await Book.findOne({ id: req.params.id })
      const book = await Book.updateOne({id: req.params.id},
        {$set:
          { read: !toUpdate.read }
        })
      
      return res.status(200).json({
        success: true,
        data: book
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }