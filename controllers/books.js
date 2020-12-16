const Book = require("../models/book");

module.exports = {
  new: newBook,
  create,
  index,
  delete: deleteBook,
  show,
  update,
};

function newBook(req, res) {
  res.render("books/new");
}

function create(req, res) {
  req.body.read = req.body.read === "on" ? true : false;
  Book.create(req.body).then(() => {
    res.redirect("/books");
  });
}
function index(req, res) {
  Book.find({}).then((books) => {
    res.render("books/index", { books });
  });
}
function deleteBook(req, res) {
  Book.findByIdAndDelete(req.params.id).then(() => {
    res.redirect("/books");
  });
}
function show(req, res) {
  Book.findById(req.params.id).then((book) => {
    res.render("books/show", { book });
  });
}
function update(req, res) {
  req.body.read = req.body.read === "on" ? true : false;
  Book.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (book) => {
      res.redirect("/books");
    }
  );
}
