import { Op } from "sequelize";
import bookModel from "../models/bookModel.js";

export class BookController {
  // Add Book
  async addBook(req, res, imageName) {
    try {
      const data = await bookModel.create({ ...req.body, image: imageName });
      console.log(data);
      if (data) {
        res.status(200).json(data);
      } else
        res
          .status(400)
          .json({ success: false, message: "Error during Adding the book." });
    } catch (err) {
      return res.json({
        success: false,
        message: "Error while Quering in Database",
      });
    }
  }

  //Get Books List
  async getBooks(req, res) {
    let { limit } = req.query;
    if (!limit) limit = 20;
    try {
      const data = await bookModel.findAll({
        limit,
      });
      console.log(data);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  //Get Book By Id
  async getBookById(req, res) {
    const { id } = req.params;
    if (!id) {
      res
        .status(404)
        .json({ success: false, message: "Book ID Not Provided." });
    } else {
      const data = await bookModel.findByPk(id);
      console.log(data);
      data ? res.status(200).json(data) : res.status(400).json([]);
    }
  }

  //Update Book By ID
  async updateBookById(req, res) {
    const { id } = req.params;
    if (id) {
      const data = await bookModel
        .findOne({ where: { id } })
        .on("success", function (data) {
          console.log(data, "test");
          // Check if record exists in db
          if (data) {
            data
              .update({
                title: "a very different title now",
              })
              .success(function () {});
          }
        });

      // update(
      //   { ...req.body },
      //   {
      //     where: {
      //       id: id,
      //     },
      //   }
      // );

      console.log(data, "data");
      if (data) {
        return res.status(200).json({
          success: true,
          message: "Successfully Updated to the Database",
        });
      } else
        return res
          .status(400)
          .json({ success: false, message: "BOOK ID Invalid" });
    }
    res.status(404).json({ success: false, message: "BOOK_ID_NOT_PROVIDED" });
  }

  //Delete Book By ID
  async deleteBookById(req, res) {
    const { id } = req.params;
    if (id) {
      const data = await bookModel.destroy({
        where: {
          id,
        },
      });
      console.log(data);
      if (data === 1) {
        res.json({ success: true, message: "Successfully Deleted" });
      } else
        res.status(400).json({ success: false, message: "Couldn't Delete" });
    } else
      res.status(404).json({ success: false, message: "ID Not Provided." });
  }

  //Search Book By Name Or ISBN
  async searchBook(req, res) {
    const { q } = req.query;
    if (q) {
      const data = await bookModel.findAll({
        where: {
          [Op.or]: {
            name: {
              [Op.like]: `%${q}%`,
            },
            isbn: {
              [Op.like]: `%${q}%`,
            },
          },
        },
      });
      console.log(data);
      res.status(200).json(data);
    } else
      res
        .status(400)
        .json({ success: false, message: "Empty Query Search String" });
  }
}
