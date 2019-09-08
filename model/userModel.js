//User model
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const env = require('../environment');

const userSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    googleId: { type: String },
    emailId: { type: String, required: true, unique: true },
    password: { type: String, unique: false },
    profileImage: { type: String },
    provider: { type: String, required: true },
    about: { type: String, default: 'Available' },
    trusting: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    trustedBy: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    gender: { type: String },
    dob: { type: Date },
    accessDashBoard: { type: Boolean, default: false },
    location: { type: Schema.Types.ObjectId, ref: 'location' },
    adhar: {
        number: { type: Number },
        name: { type: String },
        fatherOrHusband: { type: String },
        dob: { type: Date },
        gender: { type: String },
        contactNo: { type: Number },
        address: { type: String },
        dateAdded: { type: Date }
    },
    bank: {
        accountNo: { type: Number },
        accountName: { type: String },
        ifsc: { type: String },
        dateAdded: { type: Date }
    },
    rewards: { type: Number, default: 0 },
    proposals: [{ type: Schema.Types.ObjectId, ref: 'proposal' }],
    registered: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    otp: { type: String },
    adharVerified: { type: Boolean, default: false },
    bankAccountAdded: { type: Boolean, default: false },
    createdAt: { type: Date, required: true },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel