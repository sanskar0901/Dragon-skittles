const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Hospital = new Schema({
    id: { type: String, required: false },
    tob: { type: String, required: false },
    bedtype: { type: String, required: false },
})
const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    dob: { type: String, required: true },
    gender: { type: String, required: true },
    gradution: { type: [String], required: true },
    jobPreference: { type: [String], required: true },
    skills: { type: [String], required: true }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;