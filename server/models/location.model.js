const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    longitude: Number,
    latitude: Number
});

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;

