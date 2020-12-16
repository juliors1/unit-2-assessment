const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema  ({
  name: String,
  read: Boolean,


}, {
  timestamps:true
})

module.exports = mongoose.model("Book", bookSchema)
