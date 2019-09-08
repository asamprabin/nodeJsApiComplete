// News model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const alertSchema = new Schema ({
    linkTitle: { type: String, required: true },
    link: { type: String, required: true },
    body: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

const alertModel = mongoose.model('alert', alertSchema)

module.exports = alertModel