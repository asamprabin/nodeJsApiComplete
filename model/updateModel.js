// Update model
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const updateSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    details: { type: String, required: true },
    coverImage: { type: String, required: true },
    video: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const updateModel = mongoose.model("update", updateSchema);

module.exports = updateModel;