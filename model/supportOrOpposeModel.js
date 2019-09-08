//support or oppose model for proposal
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const supportOrOpposeSchema = new Schema({
    isSupport: {type: Boolean, default: false},
    isOppose: {type: Boolean, default: false},
    user: {type: Schema.ObjectId, ref: 'user', required: true},
    points: {type: Number, default: 0},
    createdAt: {type: Date, default: Date.now},
})

const supportOrOpposeModel = mongoose.model('supportOrOppose', supportOrOpposeSchema);

module.exports = supportOrOpposeModel;