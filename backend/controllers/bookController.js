const Book = require('../models/bookModel')



const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json({
            count: books.length,
            data: books

        })
    } catch (error) {
        res.status(500).json(error)
    }
}


const createBook = async (req, res) => {
    if(!req.body.title) {
        return res.status(400).json({message: 'Title is required'})
    }

    if(!req.body.author) {
        return res.status(400).json({message: 'Author is required'})
    }

    if(!req.body.year) {
        return res.status(400).json({message: 'Year is required'})
    }

    try {
        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            year: req.body.year
        })

        res.status(201).json(newBook)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getBook = async (req, res) => {
    try {
        const  Onebook = await Book.findById(req.params.id)
        res.status(200).json(Onebook)
    } catch (error) {
        res.status(500).json(error)
    }
}


const updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedBook)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id)
        res.status(200).json({message: 'deleted successfully'})
    } catch (error) {
        res.status(500).json(error)
    }
}



module.exports = { getAllBooks, createBook, getBook, updateBook, deleteBook }