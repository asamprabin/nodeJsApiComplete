//promise model

const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const env = require('../environment');

const proposalSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    title: { type: String, required: true },
    details: { type: String, required: true },
    coverImage: { type: String, required: true },
    video : { type: String },
    supports: [{ type: Schema.Types.ObjectId, ref: 'supportOrOppose' }],
    opposes: [{ type: Schema.Types.ObjectId, ref: 'supportOrOppose' }],
    notifying: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    location: { type: Schema.Types.ObjectId, ref: 'location', required: true },
    fundsRequired: { type: Number },
    // fundsRaised: { type: Number, default: 0 },
    points: { type: Number, default: 0 },
    updates: [{ type: Schema.Types.ObjectId, ref: 'update' }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'review' }],
    views: {
        total: { type: Number, default: 0 },
        otherUserViews: { type: Number, default: 0 },
        iraniyamUser: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    },
    shared: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    documentsVerified: { type: Boolean, default: false },
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: env.currentUTC },
    reports: [{ type: Schema.Types.ObjectId, ref: 'report' }]        
});

//collection name post is automatically changed to plural by mongoDb
const proposalModel = mongoose.model("proposal", proposalSchema);

module.exports = proposalModel;