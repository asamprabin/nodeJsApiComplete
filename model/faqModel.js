// Faq model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const faqSchema = new Schema ({
    category: { type: String, required: true },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

const faqModel = mongoose.model('faq', faqSchema)

module.exports = faqModel