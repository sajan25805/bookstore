import express from "express";
import multer from "multer";
import { BookController } from "../controller/bookController.js";

const router = express.Router();

let imageName;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    imageName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      "-" +
      file.originalname.trim(); //Removes the leading and trailing white space and line terminator characters from a string.
    cb(null, imageName);
  },
});

const upload = multer({ storage: storage });
const bookController = new BookController();

//Get Book list  localhost:8000/books/  or localhost:8000/books?limit=4
router.get("/", bookController.getBooks);

// Add Book to the database
router.post("/add", upload.single("image"), (req, res) => {
  bookController.addBook(req, res, imageName);
});

//Get Book By ID
router.get("/:id", bookController.getBookById);

//Update Book By ID
router.put("/update/:id", bookController.updateBookById);

//Delete Book By ID
router.delete("/delete/:id", bookController.deleteBookById);

//Search All localhost:8000/books/search/all?q=
router.get("/search/all", bookController.searchBook);

export default router;
