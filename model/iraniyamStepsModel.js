// Iraniyam Steps model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const iraniyamStepsSchema = new Schema ({
    step: { type: Number, required: true, unique: true },
    details: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
})

const iraniyamStepsModel = mongoose.model('iraniyamStep', iraniyamStepsSchema)

module.exports = iraniyamStepsModel