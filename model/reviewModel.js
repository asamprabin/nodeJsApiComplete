//comment model for comment collection and commentSchema with Mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    body: {type: String, default: ''},
    owner: {type: Schema.ObjectId, ref: 'user', required: true},
    parent: {type: Schema.ObjectId, ref: 'review'},
    createdAt: {type: Date, default: Date.now},
})

//collection name comment is automatically changed to plural by mongoDb
const reviewModel = mongoose.model('review', reviewSchema);

module.exports = reviewModel;