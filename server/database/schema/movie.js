const mongoose = require('mongoose');
const Schema = mongoose.Schema

const movieSchema = new Schema({
    doubanId: String,
    rate: Number,
    title: String,
    summary: String,
    video: String,
    poster: String,
    cover: String,

    rawTitle: String,
    movieTypes: [String],
    pubdate: Mixed,


})