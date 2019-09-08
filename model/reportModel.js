// Report model
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const reportSchema = new Schema({
    proposal: { type: Schema.Types.ObjectId, ref: 'proposal', required: true },
    reporter: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    report: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const reportModel = mongoose.model("report", reportSchema);

module.exports = reportModel;