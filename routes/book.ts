import * as express from 'express';
import * as multer from 'multer';
import { Book } from "../types";

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const router = express.Router({ mergeParams: true });
const upload = multer( {storage: storage} );

const Book = require("../models/Book");

//@Route POST api/
router.post("/", upload.single('bookImage'), (req: express.Request, res: express.Response) => {
  const { title, author, bookImage } = req.body;

  //Field validation
  if (!title || !author) {
    return res.status(400).json({
      error: {
        message: "Please enter all fields",
      },
    });
  }

  //Check for existing book
  Book.findOne({ title }).then((book: Book) => {
    if (book) {
      return res.status(400).json({
        error: {
          message: "Book already exists",
        },
      });
    }

    const newBook = new Book({
      title,
      author,
      bookImage,
    });

    newBook.save().then((book) => {
      res.json({
        book: {
          id: book._id,
          title: book.title,
          author: book.author,
          bookImage: book.bookImage
        },
      });
    });
  });
});


//@Route GetAll
router.get("/all", async (_, res: express.Response) => {
  const books = await Book.find(Book).then((book: Book) => res.json(book));
  return books;
});


//@Route GetOne 
router.get("/:bookId", async (req: express.Request, res: express.Response) => {
  try {
    await Book.findById(req.params.bookId);
    res.json({
      message: "Fetched a book!",
      receivedOne: true,
    })
  } catch (error) {
    console.log(error);
  }
});

//@Route Update one
router.patch("/:bookId", async (req: express.Request, res: express.Response) => {
  try {
    const updatedValues = req.body;
    await Book.updateOne({_id: req.params.bookId}, {...updatedValues});
    res.json({
      message: "Updated book!",
      updated: true
    })
  } catch(error) {
    console.log(error)
  }
})

// @Route Delete
router.delete("/delete/:bookId", async (req: express.Request, res: express.Response) => {
    try {
      await Book.remove({_id: req.params.bookId})
      res.json({
        message: "Deleted book!",
        deleted: true
      })
    } catch(error) {
      console.log(error);
    }
  }
);

module.exports = router;