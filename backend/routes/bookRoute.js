const express = require('express');
const router = express.Router();
const { getAllBooks, createBook, getBook, updateBook, deleteBook } = require('../controllers/bookController')



router.route('/books').get(getAllBooks).post(createBook)
router.route('/books/:id').get(getBook).put(updateBook).delete(deleteBook)




module.exports = router;