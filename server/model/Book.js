const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String
    }
});

const book = mongoose.model("Books", BookSchema, "Aki-practice");

module.exports = book;