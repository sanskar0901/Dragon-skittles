const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Company = new Schema({
    name: { type: String, required: true },
    score: { type: Number, required: true },
    tags: { type: [String], required: true },
    desc: { type: String, required: true }

},
    {
        timestamps: true,
    });
const User = mongoose.model('Company', Company);
module.exports = User;