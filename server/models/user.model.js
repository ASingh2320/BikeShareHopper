const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    hasBike: Boolean,
    totalDistanceOnBike: Number,
    totalTimeInSeconds: Number
});

const User = mongoose.model('User', userSchema);
module.exports = User;

