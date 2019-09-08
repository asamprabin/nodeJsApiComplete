// Location model
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    district: { type: String, required: true },
    districtCode: { type: String, required: true },
    state: { type: String, required: true },
    stateCode: { type: String, required: true },
    country: { type: String, required: true },
    countryCode: { type: String, required: true },
});

const locationModel = mongoose.model("location", locationSchema);

module.exports = locationModel;



