// Sponsor model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sponsorSchema = new Schema ({
    amount: { type: Number, required: true },
    sponsor: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    receiver: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    proposal: { type: Schema.Types.ObjectId, ref: 'proposal', required: true },
    createdAt: { type: Date, default: Date.now },
})

const sponsorModel = mongoose.model('sponsor', sponsorSchema)

module.exports = sponsorModel