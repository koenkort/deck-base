
import express = require('express');
import { Book } from '../types';
const router = express.Router();

const Book  = require('../models/Book');

//@Route POST api/
router.post("/",(req: express.Request, res: express.Response) => {
    const {title, author} = req.body;

    //Field validation
    if(!title || !author) {
        return res.status(400).json({
            error: {
                message: "Please enter all fields"
            }
        });
    }
    //Check for existing book
    Book.findOne({ title }).then((book: Book) => {
        if(book) {
            return res.status(400).json({
                error: {
                    message: "Book already exists"
                }
            })
        }

        const newBook = new Book({
            title,
            author
        });

        newBook.save().then(book => {
            res.json({
                book: {
                    id: book._id,
                    title: book.title,
                    author: book.author
                }
            })
        })

    })
})


//@Route Put api/
router.put("/", (req: express.Request, res: express.Response) => {
    const {title, author} = req.body;

});

//@Route Delete api/
router.delete("/", (req: express.Request, res: express.Response) => {
    const {id} = req.body;
});

router.get("/", (req: express.Request, res: express.Response) => {
    const {title, author} = req.body;
})

module.exports = router;